import { Decimal } from "decimal.js";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type FeeCreateInput = {
  amount?: Decimal | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
