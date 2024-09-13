import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  participants?: UserWhereUniqueInput | null;
};
