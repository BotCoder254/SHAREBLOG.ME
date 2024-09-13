import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  courses?: CourseListRelationFilter;
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  performanceReviews?: StringNullableFilter;
  subjects?: StringNullableFilter;
};
