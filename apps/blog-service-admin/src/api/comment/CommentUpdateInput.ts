import { LikeUpdateManyWithoutCommentsInput } from "./LikeUpdateManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  authorName?: string | null;
  authorProfilePicture?: string | null;
  content?: string | null;
  likes?: LikeUpdateManyWithoutCommentsInput;
  post?: PostWhereUniqueInput | null;
};
