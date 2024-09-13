import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  name?: string | null;
  participants?: UserWhereUniqueInput | null;
};
