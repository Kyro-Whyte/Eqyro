import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminName?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
};
