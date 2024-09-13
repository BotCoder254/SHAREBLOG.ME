import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  typeField?: StringNullableFilter;
};
