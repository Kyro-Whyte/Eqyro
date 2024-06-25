import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DepositUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
