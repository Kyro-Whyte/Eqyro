import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WithdrawalCreateInput = {
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
