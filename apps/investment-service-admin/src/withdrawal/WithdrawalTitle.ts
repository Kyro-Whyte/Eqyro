import { Withdrawal as TWithdrawal } from "../api/withdrawal/Withdrawal";

export const WITHDRAWAL_TITLE_FIELD = "id";

export const WithdrawalTitle = (record: TWithdrawal): string => {
  return record.id?.toString() || String(record.id);
};
