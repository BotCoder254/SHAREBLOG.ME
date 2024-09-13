import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Media } from "../media/Media";

export type Post = {
  author: string | null;
  authorName: string | null;
  authorProfilePicture: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  mediaItems?: Array<Media>;
  title: string | null;
  updatedAt: Date;
};
