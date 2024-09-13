import { SortOrder } from "../../util/SortOrder";

export type ExamOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  grades?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
