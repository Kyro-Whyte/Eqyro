import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionHistoryModuleBase } from "./base/transactionHistory.module.base";
import { TransactionHistoryService } from "./transactionHistory.service";
import { TransactionHistoryController } from "./transactionHistory.controller";
import { TransactionHistoryResolver } from "./transactionHistory.resolver";

@Module({
  imports: [TransactionHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService, TransactionHistoryResolver],
  exports: [TransactionHistoryService],
})
export class TransactionHistoryModule {}
