import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  participants?: User | null;
  updatedAt: Date;
};
