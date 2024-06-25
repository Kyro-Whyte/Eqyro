import { Payment } from "../payment/Payment";

export type InvestmentOption = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  updatedAt: Date;
};
