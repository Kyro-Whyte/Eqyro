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
import { IsInt, Min, Max, IsOptional, ValidateNested } from "class-validator";
import { PaymentCreateNestedManyWithoutInvestmentOptionsInput } from "./PaymentCreateNestedManyWithoutInvestmentOptionsInput";
import { Type } from "class-transformer";

@InputType()
class InvestmentOptionCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutInvestmentOptionsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutInvestmentOptionsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutInvestmentOptionsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutInvestmentOptionsInput;
}

export { InvestmentOptionCreateInput as InvestmentOptionCreateInput };
