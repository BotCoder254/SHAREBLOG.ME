import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  events?: EventWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
