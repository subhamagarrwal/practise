import {Module} from '@nestjs/common'
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';


@Module({
    providers: [TrpcService, TrpcRouter],
    exports: [TrpcRouter,TrpcService],
})
export class TrpcModule {}
