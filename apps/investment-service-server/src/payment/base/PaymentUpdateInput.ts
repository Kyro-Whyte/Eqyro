/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvestmentOptionWhereUniqueInput } from "../../investmentOption/base/InvestmentOptionWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InvestmentOptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvestmentOptionWhereUniqueInput)
  @IsOptional()
  @Field(() => InvestmentOptionWhereUniqueInput, {
    nullable: true,
  })
  investmentOption?: InvestmentOptionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PaymentUpdateInput as PaymentUpdateInput };
