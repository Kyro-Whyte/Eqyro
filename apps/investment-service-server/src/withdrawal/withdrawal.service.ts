import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithdrawalServiceBase } from "./base/withdrawal.service.base";

@Injectable()
export class WithdrawalService extends WithdrawalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
