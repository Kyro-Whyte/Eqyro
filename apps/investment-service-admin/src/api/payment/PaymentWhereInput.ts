import { StringFilter } from "../../util/StringFilter";
import { InvestmentOptionWhereUniqueInput } from "../investmentOption/InvestmentOptionWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  investmentOption?: InvestmentOptionWhereUniqueInput;
  paymentDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
