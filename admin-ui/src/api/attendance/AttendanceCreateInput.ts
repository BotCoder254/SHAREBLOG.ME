import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceCreateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
