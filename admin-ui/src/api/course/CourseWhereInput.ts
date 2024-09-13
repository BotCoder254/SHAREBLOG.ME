import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExamListRelationFilter } from "../exam/ExamListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  duration?: StringNullableFilter;
  exams?: ExamListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  prerequisites?: StringNullableFilter;
  students?: StudentListRelationFilter;
  teacher?: TeacherWhereUniqueInput;
};
