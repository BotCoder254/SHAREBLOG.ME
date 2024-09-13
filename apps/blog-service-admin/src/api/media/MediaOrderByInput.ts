import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mediaType?: SortOrder;
  mediaUrl?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
