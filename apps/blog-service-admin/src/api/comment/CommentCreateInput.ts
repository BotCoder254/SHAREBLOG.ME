import { LikeCreateNestedManyWithoutCommentsInput } from "./LikeCreateNestedManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  authorName?: string | null;
  authorProfilePicture?: string | null;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutCommentsInput;
  post?: PostWhereUniqueInput | null;
};
