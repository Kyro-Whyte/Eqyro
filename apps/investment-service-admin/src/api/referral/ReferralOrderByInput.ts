import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  referralDate?: SortOrder;
  referredUserId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
