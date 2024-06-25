import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionHistoryResolverBase } from "./base/transactionHistory.resolver.base";
import { TransactionHistory } from "./base/TransactionHistory";
import { TransactionHistoryService } from "./transactionHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionHistory)
export class TransactionHistoryResolver extends TransactionHistoryResolverBase {
  constructor(
    protected readonly service: TransactionHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
