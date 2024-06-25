import { PaymentUpdateManyWithoutInvestmentOptionsInput } from "./PaymentUpdateManyWithoutInvestmentOptionsInput";

export type InvestmentOptionUpdateInput = {
  amount?: number | null;
  payments?: PaymentUpdateManyWithoutInvestmentOptionsInput;
};
