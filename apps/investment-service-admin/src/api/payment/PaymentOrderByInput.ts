import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  investmentOptionId?: SortOrder;
  paymentDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
