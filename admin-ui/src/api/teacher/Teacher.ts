import { Course } from "../course/Course";

export type Teacher = {
  courses?: Array<Course>;
  createdAt: Date;
  department: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  performanceReviews: string | null;
  subjects: string | null;
  updatedAt: Date;
};
