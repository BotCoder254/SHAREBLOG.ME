import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
  verificationStatus?: "Option1" | null;
};
