import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type MediaUpdateInput = {
  mediaType?: "Option1" | null;
  mediaUrl?: string | null;
  post?: PostWhereUniqueInput | null;
};
