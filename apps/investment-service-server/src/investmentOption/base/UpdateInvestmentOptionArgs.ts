/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvestmentOptionWhereUniqueInput } from "./InvestmentOptionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InvestmentOptionUpdateInput } from "./InvestmentOptionUpdateInput";

@ArgsType()
class UpdateInvestmentOptionArgs {
  @ApiProperty({
    required: true,
    type: () => InvestmentOptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvestmentOptionWhereUniqueInput)
  @Field(() => InvestmentOptionWhereUniqueInput, { nullable: false })
  where!: InvestmentOptionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InvestmentOptionUpdateInput,
  })
  @ValidateNested()
  @Type(() => InvestmentOptionUpdateInput)
  @Field(() => InvestmentOptionUpdateInput, { nullable: false })
  data!: InvestmentOptionUpdateInput;
}

export { UpdateInvestmentOptionArgs as UpdateInvestmentOptionArgs };