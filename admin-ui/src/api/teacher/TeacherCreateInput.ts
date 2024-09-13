import { CourseCreateNestedManyWithoutTeachersInput } from "./CourseCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  courses?: CourseCreateNestedManyWithoutTeachersInput;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  performanceReviews?: string | null;
  subjects?: string | null;
};
