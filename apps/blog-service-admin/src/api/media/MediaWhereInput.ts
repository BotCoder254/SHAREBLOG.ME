import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type MediaWhereInput = {
  id?: StringFilter;
  mediaType?: "Option1";
  mediaUrl?: StringNullableFilter;
  post?: PostWhereUniqueInput;
};
