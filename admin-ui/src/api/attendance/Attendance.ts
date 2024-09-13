import { Student } from "../student/Student";

export type Attendance = {
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
