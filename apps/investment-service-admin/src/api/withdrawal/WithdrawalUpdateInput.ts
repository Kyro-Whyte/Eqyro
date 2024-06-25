import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WithdrawalUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
