import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InvestmentOptionResolverBase } from "./base/investmentOption.resolver.base";
import { InvestmentOption } from "./base/InvestmentOption";
import { InvestmentOptionService } from "./investmentOption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvestmentOption)
export class InvestmentOptionResolver extends InvestmentOptionResolverBase {
  constructor(
    protected readonly service: InvestmentOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
