import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvestmentOptionModuleBase } from "./base/investmentOption.module.base";
import { InvestmentOptionService } from "./investmentOption.service";
import { InvestmentOptionController } from "./investmentOption.controller";
import { InvestmentOptionResolver } from "./investmentOption.resolver";

@Module({
  imports: [InvestmentOptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvestmentOptionController],
  providers: [InvestmentOptionService, InvestmentOptionResolver],
  exports: [InvestmentOptionService],
})
export class InvestmentOptionModule {}
