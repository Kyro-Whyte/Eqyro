import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  adminName?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
};
