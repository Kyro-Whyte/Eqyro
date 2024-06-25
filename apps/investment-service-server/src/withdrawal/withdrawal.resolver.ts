import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WithdrawalResolverBase } from "./base/withdrawal.resolver.base";
import { Withdrawal } from "./base/Withdrawal";
import { WithdrawalService } from "./withdrawal.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Withdrawal)
export class WithdrawalResolver extends WithdrawalResolverBase {
  constructor(
    protected readonly service: WithdrawalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
