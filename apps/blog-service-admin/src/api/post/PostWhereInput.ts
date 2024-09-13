import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  authorName?: StringNullableFilter;
  authorProfilePicture?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  mediaItems?: MediaListRelationFilter;
  title?: StringNullableFilter;
};
