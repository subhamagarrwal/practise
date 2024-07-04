import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, BaseWsExceptionFilter } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageInputDto } from './dto/createMessageInput.dto';
import { ChatService } from './chat.service';
import { UseFilters } from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    constructor(private readonly service: ChatService) {}

    @WebSocketServer()
    server: Server


    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }
    

    // ---  Realtime Chat using WebSockets  ---
    // create a websocket connection to <backendAddress> when chatwindow is opened. Can fetch previous history at "<backendAddress>/chat/fetchConversationHistory" (<backendAddress> is "localhost:4000")
    // set up listeners for "conversation" and "error" events
    // input: emit a "message" event with data. Data format for this event given in "chat/dto/createMessageInput.dto.ts"
    // output: emits a "conversation" event. Contains the last 10 messages in given conversation after message is sent. Can use this data to fill up the chat window.
    // errors: emits a "error" event with error type incase internal server error occurs. Ensure your input "message" event data is typed correctly

    @UseFilters(new BaseWsExceptionFilter())
    @SubscribeMessage('message')
    async handleMessage(@MessageBody() data: CreateMessageInputDto){

        try{

            const message = await this.service.createNewMessage(data);
        
            const history = await this.service.fetchConversationHistory({
                conversationID: data.conversationID
            }, 1, 10)

            this.server.emit('conversation', history);

        }catch(err) {
            this.server.emit('error', err)
        }
    }
}