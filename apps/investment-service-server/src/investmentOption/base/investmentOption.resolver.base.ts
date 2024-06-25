/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { InvestmentOption } from "./InvestmentOption";
import { InvestmentOptionCountArgs } from "./InvestmentOptionCountArgs";
import { InvestmentOptionFindManyArgs } from "./InvestmentOptionFindManyArgs";
import { InvestmentOptionFindUniqueArgs } from "./InvestmentOptionFindUniqueArgs";
import { CreateInvestmentOptionArgs } from "./CreateInvestmentOptionArgs";
import { UpdateInvestmentOptionArgs } from "./UpdateInvestmentOptionArgs";
import { DeleteInvestmentOptionArgs } from "./DeleteInvestmentOptionArgs";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { InvestmentOptionService } from "../investmentOption.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvestmentOption)
export class InvestmentOptionResolverBase {
  constructor(
    protected readonly service: InvestmentOptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "read",
    possession: "any",
  })
  async _investmentOptionsMeta(
    @graphql.Args() args: InvestmentOptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InvestmentOption])
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "read",
    possession: "any",
  })
  async investmentOptions(
    @graphql.Args() args: InvestmentOptionFindManyArgs
  ): Promise<InvestmentOption[]> {
    return this.service.investmentOptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InvestmentOption, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "read",
    possession: "own",
  })
  async investmentOption(
    @graphql.Args() args: InvestmentOptionFindUniqueArgs
  ): Promise<InvestmentOption | null> {
    const result = await this.service.investmentOption(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvestmentOption)
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "create",
    possession: "any",
  })
  async createInvestmentOption(
    @graphql.Args() args: CreateInvestmentOptionArgs
  ): Promise<InvestmentOption> {
    return await this.service.createInvestmentOption({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvestmentOption)
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "update",
    possession: "any",
  })
  async updateInvestmentOption(
    @graphql.Args() args: UpdateInvestmentOptionArgs
  ): Promise<InvestmentOption | null> {
    try {
      return await this.service.updateInvestmentOption({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InvestmentOption)
  @nestAccessControl.UseRoles({
    resource: "InvestmentOption",
    action: "delete",
    possession: "any",
  })
  async deleteInvestmentOption(
    @graphql.Args() args: DeleteInvestmentOptionArgs
  ): Promise<InvestmentOption | null> {
    try {
      return await this.service.deleteInvestmentOption(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Payment], { name: "payments" })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @graphql.Parent() parent: InvestmentOption,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}