import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralUpdateInput = {
  referralDate?: Date | null;
  referredUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
