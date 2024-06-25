import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvestmentOptionServiceBase } from "./base/investmentOption.service.base";

@Injectable()
export class InvestmentOptionService extends InvestmentOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
