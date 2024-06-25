import { InvestmentOption as TInvestmentOption } from "../api/investmentOption/InvestmentOption";

export const INVESTMENTOPTION_TITLE_FIELD = "id";

export const InvestmentOptionTitle = (record: TInvestmentOption): string => {
  return record.id?.toString() || String(record.id);
};
