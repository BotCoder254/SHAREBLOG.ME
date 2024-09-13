import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AnnouncementCreateInput = {
  audience?: StudentWhereUniqueInput | null;
  content?: string | null;
  date?: Date | null;
  title?: string | null;
};
