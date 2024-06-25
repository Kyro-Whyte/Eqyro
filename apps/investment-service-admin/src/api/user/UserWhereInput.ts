import { DepositListRelationFilter } from "../deposit/DepositListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ReferralListRelationFilter } from "../referral/ReferralListRelationFilter";
import { WithdrawalListRelationFilter } from "../withdrawal/WithdrawalListRelationFilter";

export type UserWhereInput = {
  deposits?: DepositListRelationFilter;
  email?: StringNullableFilter;
  emailUser?: StringNullableFilter;
  firstName?: StringNullableFilter;
  firstNameUser?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lastNameUser?: StringNullableFilter;
  passwordUser?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  referrals?: ReferralListRelationFilter;
  username?: StringFilter;
  usernameUser?: StringNullableFilter;
  withdrawals?: WithdrawalListRelationFilter;
};
