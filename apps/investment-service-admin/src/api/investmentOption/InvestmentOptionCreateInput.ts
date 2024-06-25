import { PaymentCreateNestedManyWithoutInvestmentOptionsInput } from "./PaymentCreateNestedManyWithoutInvestmentOptionsInput";

export type InvestmentOptionCreateInput = {
  amount?: number | null;
  payments?: PaymentCreateNestedManyWithoutInvestmentOptionsInput;
};
