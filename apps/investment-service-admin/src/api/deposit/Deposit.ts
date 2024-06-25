import { User } from "../user/User";

export type Deposit = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
