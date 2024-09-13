import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { FeeListRelationFilter } from "../fee/FeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  announcements?: AnnouncementWhereUniqueInput;
  attendances?: AttendanceListRelationFilter;
  classField?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  exam?: ExamWhereUniqueInput;
  fees?: FeeListRelationFilter;
  firstName?: StringNullableFilter;
  grade?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  password?: StringFilter;
  phone?: StringNullableFilter;
};
