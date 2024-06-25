import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";
import { ReferralTitle } from "../referral/ReferralTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="emailUser" source="emailUser" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="firstNameUser" source="firstNameUser" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lastNameUser" source="lastNameUser" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordUser" source="passwordUser" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="referrals"
          reference="Referral"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReferralTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="usernameUser" source="usernameUser" />
      </SimpleForm>
    </Edit>
  );
};
