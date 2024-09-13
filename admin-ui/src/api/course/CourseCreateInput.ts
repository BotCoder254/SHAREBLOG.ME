import { ExamCreateNestedManyWithoutCoursesInput } from "./ExamCreateNestedManyWithoutCoursesInput";
import { StudentCreateNestedManyWithoutCoursesInput } from "./StudentCreateNestedManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseCreateInput = {
  description?: string | null;
  duration?: string | null;
  exams?: ExamCreateNestedManyWithoutCoursesInput;
  name?: string | null;
  prerequisites?: string | null;
  students?: StudentCreateNestedManyWithoutCoursesInput;
  teacher?: TeacherWhereUniqueInput | null;
};
