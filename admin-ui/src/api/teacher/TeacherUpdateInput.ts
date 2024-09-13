import { CourseUpdateManyWithoutTeachersInput } from "./CourseUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  courses?: CourseUpdateManyWithoutTeachersInput;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  performanceReviews?: string | null;
  subjects?: string | null;
};
