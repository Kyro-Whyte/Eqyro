import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { InvestmentOptionTitle } from "../investmentOption/InvestmentOptionTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="investmentOption.id"
          reference="InvestmentOption"
          label="investmentOption"
        >
          <SelectInput optionText={InvestmentOptionTitle} />
        </ReferenceInput>
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
