import { InvestmentOptionWhereInput } from "./InvestmentOptionWhereInput";
import { InvestmentOptionOrderByInput } from "./InvestmentOptionOrderByInput";

export type InvestmentOptionFindManyArgs = {
  where?: InvestmentOptionWhereInput;
  orderBy?: Array<InvestmentOptionOrderByInput>;
  skip?: number;
  take?: number;
};
