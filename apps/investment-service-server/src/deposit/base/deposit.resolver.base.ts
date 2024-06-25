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
import { Deposit } from "./Deposit";
import { DepositCountArgs } from "./DepositCountArgs";
import { DepositFindManyArgs } from "./DepositFindManyArgs";
import { DepositFindUniqueArgs } from "./DepositFindUniqueArgs";
import { CreateDepositArgs } from "./CreateDepositArgs";
import { UpdateDepositArgs } from "./UpdateDepositArgs";
import { DeleteDepositArgs } from "./DeleteDepositArgs";
import { User } from "../../user/base/User";
import { DepositService } from "../deposit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Deposit)
export class DepositResolverBase {
  constructor(
    protected readonly service: DepositService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "read",
    possession: "any",
  })
  async _depositsMeta(
    @graphql.Args() args: DepositCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Deposit])
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "read",
    possession: "any",
  })
  async deposits(
    @graphql.Args() args: DepositFindManyArgs
  ): Promise<Deposit[]> {
    return this.service.deposits(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Deposit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "read",
    possession: "own",
  })
  async deposit(
    @graphql.Args() args: DepositFindUniqueArgs
  ): Promise<Deposit | null> {
    const result = await this.service.deposit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Deposit)
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "create",
    possession: "any",
  })
  async createDeposit(
    @graphql.Args() args: CreateDepositArgs
  ): Promise<Deposit> {
    return await this.service.createDeposit({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Deposit)
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "update",
    possession: "any",
  })
  async updateDeposit(
    @graphql.Args() args: UpdateDepositArgs
  ): Promise<Deposit | null> {
    try {
      return await this.service.updateDeposit({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Deposit)
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "delete",
    possession: "any",
  })
  async deleteDeposit(
    @graphql.Args() args: DeleteDepositArgs
  ): Promise<Deposit | null> {
    try {
      return await this.service.deleteDeposit(args);
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
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Deposit): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
