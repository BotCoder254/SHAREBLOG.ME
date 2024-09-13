import { ExamUpdateManyWithoutCoursesInput } from "./ExamUpdateManyWithoutCoursesInput";
import { StudentUpdateManyWithoutCoursesInput } from "./StudentUpdateManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseUpdateInput = {
  description?: string | null;
  duration?: string | null;
  exams?: ExamUpdateManyWithoutCoursesInput;
  name?: string | null;
  prerequisites?: string | null;
  students?: StudentUpdateManyWithoutCoursesInput;
  teacher?: TeacherWhereUniqueInput | null;
};
