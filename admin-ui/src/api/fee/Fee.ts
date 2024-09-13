import { Decimal } from "decimal.js";
import { Student } from "../student/Student";

export type Fee = {
  amount: Decimal | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
