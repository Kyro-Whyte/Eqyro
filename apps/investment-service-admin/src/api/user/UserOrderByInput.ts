import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailUser?: SortOrder;
  firstName?: SortOrder;
  firstNameUser?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  lastNameUser?: SortOrder;
  password?: SortOrder;
  passwordUser?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  usernameUser?: SortOrder;
};
