import { Injectable } from "@nestjs/common";
import { Prisma, Client } from "@prisma/client";
import { PrismaService } from "@server/prisma/prisma.service";

@Injectable()
export class ClientService{

    constructor(private prisma: PrismaService) {}

    async createClient (input: Prisma.ClientCreateInput) {

        return (await this.prisma.client.create({
          data: input,
        })) as Client;
    };

    async findUniqueClient (where: Prisma.ClientWhereUniqueInput, select?: Prisma.ClientSelect) {

        return (await this.prisma.client.findUnique({
            where,
            select
        })) as Client

    }

    async findManyClient (page: number, limit: number){
        const take = limit || 10;
        const skip = (page - 1 ) * limit
        return (await this.prisma.client.findMany({
            skip,
            take,
        }))
    }

    async updateClient (where: Prisma.ClientWhereUniqueInput, data: Prisma.ClientUpdateInput, select?: Prisma.ClientSelect) {
        
        return (await this.prisma.client.update({
            where,
            data,
            select })) as Client;
              
    }

    async deleteClient (where: Prisma.ClientWhereUniqueInput){
        return (await this.prisma.client.delete({
            where
        }));
    }
}