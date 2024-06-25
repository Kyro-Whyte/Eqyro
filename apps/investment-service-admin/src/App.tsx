import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { InvestmentOptionList } from "./investmentOption/InvestmentOptionList";
import { InvestmentOptionCreate } from "./investmentOption/InvestmentOptionCreate";
import { InvestmentOptionEdit } from "./investmentOption/InvestmentOptionEdit";
import { InvestmentOptionShow } from "./investmentOption/InvestmentOptionShow";
import { ReferralList } from "./referral/ReferralList";
import { ReferralCreate } from "./referral/ReferralCreate";
import { ReferralEdit } from "./referral/ReferralEdit";
import { ReferralShow } from "./referral/ReferralShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TransactionHistoryList } from "./transactionHistory/TransactionHistoryList";
import { TransactionHistoryCreate } from "./transactionHistory/TransactionHistoryCreate";
import { TransactionHistoryEdit } from "./transactionHistory/TransactionHistoryEdit";
import { TransactionHistoryShow } from "./transactionHistory/TransactionHistoryShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { PerformanceList } from "./performance/PerformanceList";
import { PerformanceCreate } from "./performance/PerformanceCreate";
import { PerformanceEdit } from "./performance/PerformanceEdit";
import { PerformanceShow } from "./performance/PerformanceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InvestmentService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="InvestmentOption"
          list={InvestmentOptionList}
          edit={InvestmentOptionEdit}
          create={InvestmentOptionCreate}
          show={InvestmentOptionShow}
        />
        <Resource
          name="Referral"
          list={ReferralList}
          edit={ReferralEdit}
          create={ReferralCreate}
          show={ReferralShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="TransactionHistory"
          list={TransactionHistoryList}
          edit={TransactionHistoryEdit}
          create={TransactionHistoryCreate}
          show={TransactionHistoryShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Performance"
          list={PerformanceList}
          edit={PerformanceEdit}
          create={PerformanceCreate}
          show={PerformanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
