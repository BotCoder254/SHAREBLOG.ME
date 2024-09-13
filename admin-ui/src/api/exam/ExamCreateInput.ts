import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentCreateNestedManyWithoutExamsInput } from "./StudentCreateNestedManyWithoutExamsInput";

export type ExamCreateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  grades?: string | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutExamsInput;
};
