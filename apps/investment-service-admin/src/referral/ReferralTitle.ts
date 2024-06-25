import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "referredUserId";

export const ReferralTitle = (record: TReferral): string => {
  return record.referredUserId?.toString() || String(record.id);
};
