import { DepositUpdateManyWithoutUsersInput } from "./DepositUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { ReferralUpdateManyWithoutUsersInput } from "./ReferralUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WithdrawalUpdateManyWithoutUsersInput } from "./WithdrawalUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  deposits?: DepositUpdateManyWithoutUsersInput;
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
  withdrawals?: WithdrawalUpdateManyWithoutUsersInput;
};
