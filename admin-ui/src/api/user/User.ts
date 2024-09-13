import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Event | null;
  id: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
