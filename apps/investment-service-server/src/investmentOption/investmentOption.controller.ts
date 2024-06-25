import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvestmentOptionService } from "./investmentOption.service";
import { InvestmentOptionControllerBase } from "./base/investmentOption.controller.base";

@swagger.ApiTags("investmentOptions")
@common.Controller("investmentOptions")
export class InvestmentOptionController extends InvestmentOptionControllerBase {
  constructor(
    protected readonly service: InvestmentOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
