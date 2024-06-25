import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INVESTMENTOPTION_TITLE_FIELD } from "../investmentOption/InvestmentOptionTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="emailUser" source="emailUser" />
        <TextField label="First Name" source="firstName" />
        <TextField label="firstNameUser" source="firstNameUser" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="lastNameUser" source="lastNameUser" />
        <TextField label="passwordUser" source="passwordUser" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="usernameUser" source="usernameUser" />
        <ReferenceManyField
          reference="Payment"
          target="userId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="investmentOption"
              source="investmentoption.id"
              reference="InvestmentOption"
            >
              <TextField source={INVESTMENTOPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="paymentDate" source="paymentDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Referral"
          target="userId"
          label="Referrals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="referralDate" source="referralDate" />
            <TextField label="referredUserId" source="referredUserId" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
