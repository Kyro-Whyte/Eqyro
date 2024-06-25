import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformanceModuleBase } from "./base/performance.module.base";
import { PerformanceService } from "./performance.service";
import { PerformanceController } from "./performance.controller";
import { PerformanceResolver } from "./performance.resolver";

@Module({
  imports: [PerformanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformanceController],
  providers: [PerformanceService, PerformanceResolver],
  exports: [PerformanceService],
})
export class PerformanceModule {}
