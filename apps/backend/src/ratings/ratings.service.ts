import { Injectable } from "@nestjs/common";
import { Prisma, Ratings } from "@prisma/client";
import { PrismaService } from "@server/prisma/prisma.service";

@Injectable()
export class RatingsService {

    constructor(private prisma: PrismaService) {}

    async createRatings(input: Prisma.RatingsCreateInput) {
        return (await this.prisma.ratings.create({
            data: input,
        })) as Ratings;
    }

    async findUniqueRatings(where: Prisma.RatingsWhereUniqueInput, select?: Prisma.RatingsSelect) {
        return (await this.prisma.ratings.findUnique({
            where,
            select
        })) as Ratings;
    }

    async findManyRatings(page: number, limit: number) {
        const take = limit || 10;
        const skip = (page - 1) * limit;
        return (await this.prisma.ratings.findMany({
            skip,
            take,
        }));
    }

    async updateRatings(where: Prisma.RatingsWhereUniqueInput, data: Prisma.RatingsUpdateInput, select?: Prisma.RatingsSelect) {
        return (await this.prisma.ratings.update({
            where,
            data,
            select
        })) as Ratings;
    }

    async deleteRatings(where: Prisma.RatingsWhereUniqueInput) {
        return (await this.prisma.ratings.delete({
            where
        }));
    }
}