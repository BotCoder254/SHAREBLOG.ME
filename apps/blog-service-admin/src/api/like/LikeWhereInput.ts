import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  comment?: CommentWhereUniqueInput;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
