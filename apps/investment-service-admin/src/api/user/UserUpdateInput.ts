import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { ReferralUpdateManyWithoutUsersInput } from "./ReferralUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  emailUser?: string | null;
  firstName?: string | null;
  firstNameUser?: string | null;
  lastName?: string | null;
  lastNameUser?: string | null;
  password?: string;
  passwordUser?: string | null;
  payments?: PaymentUpdateManyWithoutUsersInput;
  referrals?: ReferralUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  usernameUser?: string | null;
};
