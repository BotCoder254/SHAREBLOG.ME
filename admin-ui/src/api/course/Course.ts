import { Exam } from "../exam/Exam";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type Course = {
  createdAt: Date;
  description: string | null;
  duration: string | null;
  exams?: Array<Exam>;
  id: string;
  name: string | null;
  prerequisites: string | null;
  students?: Array<Student>;
  teacher?: Teacher | null;
  updatedAt: Date;
};
