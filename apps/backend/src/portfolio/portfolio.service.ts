import { Injectable } from "@nestjs/common";
import { Prisma, Portfolio } from "@prisma/client";
import { PrismaService } from "@server/prisma/prisma.service";

@Injectable()
export class PortfolioService {

    constructor(private prisma: PrismaService) {}

    async createPortfolio(input: Prisma.PortfolioCreateInput) {
        return (await this.prisma.portfolio.create({
          data: input,
        })) as Portfolio;
    }

    async findUniquePortfolio(where: Prisma.PortfolioWhereUniqueInput, select?: Prisma.PortfolioSelect) {
        return (await this.prisma.portfolio.findUnique({
            where,
            select
        })) as Portfolio;
    }

    async findManyPortfolio(page: number, limit: number) {
        const take = limit || 10;
        const skip = (page - 1) * limit;
        return (await this.prisma.portfolio.findMany({
            skip,
            take,
        }));
    }

    async updatePortfolio(where: Prisma.PortfolioWhereUniqueInput, data: Prisma.PortfolioUpdateInput, select?: Prisma.PortfolioSelect) {
        return (await this.prisma.portfolio.update({
            where,
            data,
            select 
        })) as Portfolio;
    }

    async deletePortfolio(where: Prisma.PortfolioWhereUniqueInput) {
        return (await this.prisma.portfolio.delete({
            where
        }));
    }
}