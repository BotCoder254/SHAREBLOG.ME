import { Announcement } from "../announcement/Announcement";
import { Attendance } from "../attendance/Attendance";
import { Course } from "../course/Course";
import { Document } from "../document/Document";
import { Exam } from "../exam/Exam";
import { Fee } from "../fee/Fee";

export type Student = {
  address: string | null;
  announcements?: Announcement | null;
  attendances?: Array<Attendance>;
  classField: string | null;
  course?: Course | null;
  createdAt: Date;
  documents?: Array<Document>;
  email: string | null;
  exam?: Exam | null;
  fees?: Array<Fee>;
  firstName: string | null;
  grade: string | null;
  id: string;
  lastName: string | null;
  password: string;
  phone: string | null;
  updatedAt: Date;
};
