import { InvestmentOption } from "../investmentOption/InvestmentOption";
import { User } from "../user/User";

export type Payment = {
  createdAt: Date;
  id: string;
  investmentOption?: InvestmentOption | null;
  paymentDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
