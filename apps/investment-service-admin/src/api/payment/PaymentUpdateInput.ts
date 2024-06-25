import { InvestmentOptionWhereUniqueInput } from "../investmentOption/InvestmentOptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  investmentOption?: InvestmentOptionWhereUniqueInput | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
