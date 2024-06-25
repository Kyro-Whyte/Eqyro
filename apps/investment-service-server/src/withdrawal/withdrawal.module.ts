import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WithdrawalModuleBase } from "./base/withdrawal.module.base";
import { WithdrawalService } from "./withdrawal.service";
import { WithdrawalController } from "./withdrawal.controller";
import { WithdrawalResolver } from "./withdrawal.resolver";

@Module({
  imports: [WithdrawalModuleBase, forwardRef(() => AuthModule)],
  controllers: [WithdrawalController],
  providers: [WithdrawalService, WithdrawalResolver],
  exports: [WithdrawalService],
})
export class WithdrawalModule {}
