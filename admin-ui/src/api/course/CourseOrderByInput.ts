import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  prerequisites?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
