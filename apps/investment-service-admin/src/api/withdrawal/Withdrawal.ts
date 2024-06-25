import { User } from "../user/User";

export type Withdrawal = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
