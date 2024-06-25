import { Payment } from "../payment/Payment";
import { Referral } from "../referral/Referral";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emailUser: string | null;
  firstName: string | null;
  firstNameUser: string | null;
  id: string;
  lastName: string | null;
  lastNameUser: string | null;
  passwordUser: string | null;
  payments?: Array<Payment>;
  referrals?: Array<Referral>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  usernameUser: string | null;
};
