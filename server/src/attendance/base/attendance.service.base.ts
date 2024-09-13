/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Attendance as PrismaAttendance,
  Student as PrismaStudent,
} from "@prisma/client";

export class AttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttendanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attendance.count(args);
  }

  async attendances(
    args: Prisma.AttendanceFindManyArgs
  ): Promise<PrismaAttendance[]> {
    return this.prisma.attendance.findMany(args);
  }
  async attendance(
    args: Prisma.AttendanceFindUniqueArgs
  ): Promise<PrismaAttendance | null> {
    return this.prisma.attendance.findUnique(args);
  }
  async createAttendance(
    args: Prisma.AttendanceCreateArgs
  ): Promise<PrismaAttendance> {
    return this.prisma.attendance.create(args);
  }
  async updateAttendance(
    args: Prisma.AttendanceUpdateArgs
  ): Promise<PrismaAttendance> {
    return this.prisma.attendance.update(args);
  }
  async deleteAttendance(
    args: Prisma.AttendanceDeleteArgs
  ): Promise<PrismaAttendance> {
    return this.prisma.attendance.delete(args);
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.attendance
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
