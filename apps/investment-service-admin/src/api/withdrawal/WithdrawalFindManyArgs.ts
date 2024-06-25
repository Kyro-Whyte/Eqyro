import { WithdrawalWhereInput } from "./WithdrawalWhereInput";
import { WithdrawalOrderByInput } from "./WithdrawalOrderByInput";

export type WithdrawalFindManyArgs = {
  where?: WithdrawalWhereInput;
  orderBy?: Array<WithdrawalOrderByInput>;
  skip?: number;
  take?: number;
};
