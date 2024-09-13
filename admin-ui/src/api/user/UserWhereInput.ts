import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  events?: EventWhereUniqueInput;
  id?: StringFilter;
  username?: StringFilter;
};
