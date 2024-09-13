import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DocumentCreateNestedManyWithoutStudentsInput } from "./DocumentCreateNestedManyWithoutStudentsInput";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { FeeCreateNestedManyWithoutStudentsInput } from "./FeeCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  address?: string | null;
  announcements?: AnnouncementWhereUniqueInput | null;
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  classField?: string | null;
  course?: CourseWhereUniqueInput | null;
  documents?: DocumentCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  exam?: ExamWhereUniqueInput | null;
  fees?: FeeCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  grade?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
};
