import { Like } from "../like/Like";
import { Post } from "../post/Post";

export type Comment = {
  author: string | null;
  authorName: string | null;
  authorProfilePicture: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  post?: Post | null;
  updatedAt: Date;
};
