import { TransactionHistory as TTransactionHistory } from "../api/transactionHistory/TransactionHistory";

export const TRANSACTIONHISTORY_TITLE_FIELD = "id";

export const TransactionHistoryTitle = (
  record: TTransactionHistory
): string => {
  return record.id?.toString() || String(record.id);
};
