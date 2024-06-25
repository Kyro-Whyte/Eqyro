import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DepositCreateInput = {
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
