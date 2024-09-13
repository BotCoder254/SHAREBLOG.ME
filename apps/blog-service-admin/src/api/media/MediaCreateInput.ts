import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type MediaCreateInput = {
  mediaType?: "Option1" | null;
  mediaUrl?: string | null;
  post?: PostWhereUniqueInput | null;
};
