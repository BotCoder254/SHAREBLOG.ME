import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  performanceReviews?: SortOrder;
  subjects?: SortOrder;
  updatedAt?: SortOrder;
};
