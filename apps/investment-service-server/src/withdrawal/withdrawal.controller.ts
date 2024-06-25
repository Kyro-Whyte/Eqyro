import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WithdrawalService } from "./withdrawal.service";
import { WithdrawalControllerBase } from "./base/withdrawal.controller.base";

@swagger.ApiTags("withdrawals")
@common.Controller("withdrawals")
export class WithdrawalController extends WithdrawalControllerBase {
  constructor(
    protected readonly service: WithdrawalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
