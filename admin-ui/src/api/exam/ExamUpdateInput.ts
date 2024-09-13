import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentUpdateManyWithoutExamsInput } from "./StudentUpdateManyWithoutExamsInput";

export type ExamUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  grades?: string | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutExamsInput;
};
