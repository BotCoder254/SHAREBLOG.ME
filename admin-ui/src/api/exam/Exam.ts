import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Exam = {
  course?: Course | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  grades: string | null;
  id: string;
  name: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
