import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralCreateInput = {
  referralDate?: Date | null;
  referredUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
