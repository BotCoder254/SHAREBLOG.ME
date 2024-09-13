import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
  verificationStatus?: "Option1" | null;
};
