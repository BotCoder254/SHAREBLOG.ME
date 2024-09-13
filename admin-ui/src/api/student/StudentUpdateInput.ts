import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DocumentUpdateManyWithoutStudentsInput } from "./DocumentUpdateManyWithoutStudentsInput";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { FeeUpdateManyWithoutStudentsInput } from "./FeeUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  address?: string | null;
  announcements?: AnnouncementWhereUniqueInput | null;
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  classField?: string | null;
  course?: CourseWhereUniqueInput | null;
  documents?: DocumentUpdateManyWithoutStudentsInput;
  email?: string | null;
  exam?: ExamWhereUniqueInput | null;
  fees?: FeeUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  grade?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
};
