import { Student } from "../student/Student";

export type Announcement = {
  audience?: Student | null;
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
