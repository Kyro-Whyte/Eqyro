import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type InvestmentOptionWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
};
