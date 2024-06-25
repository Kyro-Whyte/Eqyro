import { TransactionHistoryWhereInput } from "./TransactionHistoryWhereInput";
import { TransactionHistoryOrderByInput } from "./TransactionHistoryOrderByInput";

export type TransactionHistoryFindManyArgs = {
  where?: TransactionHistoryWhereInput;
  orderBy?: Array<TransactionHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
