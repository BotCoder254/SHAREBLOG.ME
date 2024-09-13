import { Post } from "../post/Post";

export type Media = {
  createdAt: Date;
  id: string;
  mediaType?: "Option1" | null;
  mediaUrl: string | null;
  post?: Post | null;
  updatedAt: Date;
};
