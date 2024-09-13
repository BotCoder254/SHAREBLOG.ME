import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
