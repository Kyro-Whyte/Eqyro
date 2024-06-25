import { DepositCreateNestedManyWithoutUsersInput } from "./DepositCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { ReferralCreateNestedManyWithoutUsersInput } from "./ReferralCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WithdrawalCreateNestedManyWithoutUsersInput } from "./WithdrawalCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  deposits?: DepositCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emailUser?: string | null;
  firstName?: string | null;
  firstNameUser?: string | null;
  lastName?: string | null;
  lastNameUser?: string | null;
  password: string;
  passwordUser?: string | null;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  referrals?: ReferralCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  usernameUser?: string | null;
  withdrawals?: WithdrawalCreateNestedManyWithoutUsersInput;
};
