import { Injectable } from "@nestjs/common";
import { Prisma, Freelancer } from "@prisma/client";
import { PrismaService } from "@server/prisma/prisma.service";

@Injectable()
export class FreelancerService{

    constructor(private prisma: PrismaService) {}

    async createFreelancer (input: Prisma.FreelancerCreateInput) {

        return (await this.prisma.freelancer.create({
          data: input,
        })) as Freelancer;
    };

    async findUniqueFreelancer (where: Prisma.FreelancerWhereUniqueInput, select?: Prisma.FreelancerSelect) {

        return (await this.prisma.freelancer.findUnique({
            where,
            select
        })) as Freelancer

    }

    async findManyFreelancers (page: number = 1, limit: number = 10){
        const take = limit || 10;
        const skip = (page - 1 ) * limit
        return (await this.prisma.freelancer.findMany({
            skip,
            take,
        }))
    }

    async updateFreelancer (where: Prisma.FreelancerWhereUniqueInput, data: Prisma.FreelancerUpdateInput, select?: Prisma.FreelancerSelect) {
        
        return (await this.prisma.freelancer.update({
            where,
            data,
            select })) as Freelancer;
              
    }

    async deleteFreelancer (where: Prisma.FreelancerWhereUniqueInput){
        return (await this.prisma.freelancer.delete({
            where
        })) as Freelancer;
    }
}