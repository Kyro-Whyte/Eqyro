import { User } from "../user/User";

export type Referral = {
  createdAt: Date;
  id: string;
  referralDate: Date | null;
  referredUserId: string | null;
  updatedAt: Date;
  user?: User | null;
};
