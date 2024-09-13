import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceUpdateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
