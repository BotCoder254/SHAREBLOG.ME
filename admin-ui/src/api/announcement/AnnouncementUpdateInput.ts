import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AnnouncementUpdateInput = {
  audience?: StudentWhereUniqueInput | null;
  content?: string | null;
  date?: Date | null;
  title?: string | null;
};
