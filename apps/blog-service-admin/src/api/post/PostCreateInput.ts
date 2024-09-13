import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { MediaCreateNestedManyWithoutPostsInput } from "./MediaCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  authorName?: string | null;
  authorProfilePicture?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  mediaItems?: MediaCreateNestedManyWithoutPostsInput;
  title?: string | null;
};
