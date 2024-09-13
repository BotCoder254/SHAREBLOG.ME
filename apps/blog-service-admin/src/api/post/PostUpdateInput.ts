import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { MediaUpdateManyWithoutPostsInput } from "./MediaUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  authorName?: string | null;
  authorProfilePicture?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  mediaItems?: MediaUpdateManyWithoutPostsInput;
  title?: string | null;
};
