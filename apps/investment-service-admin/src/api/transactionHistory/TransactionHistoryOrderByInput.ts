import { SortOrder } from "../../util/SortOrder";

export type TransactionHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
