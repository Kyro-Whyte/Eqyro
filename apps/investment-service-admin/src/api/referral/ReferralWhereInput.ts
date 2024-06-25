import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralWhereInput = {
  id?: StringFilter;
  referralDate?: DateTimeNullableFilter;
  referredUserId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
