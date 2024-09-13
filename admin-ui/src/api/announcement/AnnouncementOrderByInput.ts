import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  audienceId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
