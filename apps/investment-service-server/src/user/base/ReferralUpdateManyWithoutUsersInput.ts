/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReferralWhereUniqueInput } from "../../referral/base/ReferralWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReferralUpdateManyWithoutUsersInput {
  @Field(() => [ReferralWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReferralWhereUniqueInput],
  })
  connect?: Array<ReferralWhereUniqueInput>;

  @Field(() => [ReferralWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReferralWhereUniqueInput],
  })
  disconnect?: Array<ReferralWhereUniqueInput>;

  @Field(() => [ReferralWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReferralWhereUniqueInput],
  })
  set?: Array<ReferralWhereUniqueInput>;
}

export { ReferralUpdateManyWithoutUsersInput as ReferralUpdateManyWithoutUsersInput };
