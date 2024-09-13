import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  comment?: CommentWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
