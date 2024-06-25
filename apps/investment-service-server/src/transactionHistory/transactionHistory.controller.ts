import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionHistoryService } from "./transactionHistory.service";
import { TransactionHistoryControllerBase } from "./base/transactionHistory.controller.base";

@swagger.ApiTags("transactionHistories")
@common.Controller("transactionHistories")
export class TransactionHistoryController extends TransactionHistoryControllerBase {
  constructor(
    protected readonly service: TransactionHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
