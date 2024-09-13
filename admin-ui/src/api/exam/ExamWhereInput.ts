import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type ExamWhereInput = {
  course?: CourseWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  grades?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
};
