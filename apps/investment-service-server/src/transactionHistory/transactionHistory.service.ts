import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionHistoryServiceBase } from "./base/transactionHistory.service.base";

@Injectable()
export class TransactionHistoryService extends TransactionHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
