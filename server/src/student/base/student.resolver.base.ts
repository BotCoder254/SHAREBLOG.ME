/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Student } from "./Student";
import { StudentCountArgs } from "./StudentCountArgs";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentFindUniqueArgs } from "./StudentFindUniqueArgs";
import { CreateStudentArgs } from "./CreateStudentArgs";
import { UpdateStudentArgs } from "./UpdateStudentArgs";
import { DeleteStudentArgs } from "./DeleteStudentArgs";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { FeeFindManyArgs } from "../../fee/base/FeeFindManyArgs";
import { Fee } from "../../fee/base/Fee";
import { Announcement } from "../../announcement/base/Announcement";
import { Course } from "../../course/base/Course";
import { Exam } from "../../exam/base/Exam";
import { StudentService } from "../student.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Student)
export class StudentResolverBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async _studentsMeta(
    @graphql.Args() args: StudentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Student])
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async students(
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    return this.service.students(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Student, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  async student(
    @graphql.Args() args: StudentFindUniqueArgs
  ): Promise<Student | null> {
    const result = await this.service.student(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  async createStudent(
    @graphql.Args() args: CreateStudentArgs
  ): Promise<Student> {
    return await this.service.createStudent({
      ...args,
      data: {
        ...args.data,

        announcements: args.data.announcements
          ? {
              connect: args.data.announcements,
            }
          : undefined,

        course: args.data.course
          ? {
              connect: args.data.course,
            }
          : undefined,

        exam: args.data.exam
          ? {
              connect: args.data.exam,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateStudent(
    @graphql.Args() args: UpdateStudentArgs
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        ...args,
        data: {
          ...args.data,

          announcements: args.data.announcements
            ? {
                connect: args.data.announcements,
              }
            : undefined,

          course: args.data.course
            ? {
                connect: args.data.course,
              }
            : undefined,

          exam: args.data.exam
            ? {
                connect: args.data.exam,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  async deleteStudent(
    @graphql.Args() args: DeleteStudentArgs
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Attendance], { name: "attendances" })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async findAttendances(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    const results = await this.service.findAttendances(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Document], { name: "documents" })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async findDocuments(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    const results = await this.service.findDocuments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Fee], { name: "fees" })
  @nestAccessControl.UseRoles({
    resource: "Fee",
    action: "read",
    possession: "any",
  })
  async findFees(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: FeeFindManyArgs
  ): Promise<Fee[]> {
    const results = await this.service.findFees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Announcement, {
    nullable: true,
    name: "announcements",
  })
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async getAnnouncements(
    @graphql.Parent() parent: Student
  ): Promise<Announcement | null> {
    const result = await this.service.getAnnouncements(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async getCourse(@graphql.Parent() parent: Student): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Exam, {
    nullable: true,
    name: "exam",
  })
  @nestAccessControl.UseRoles({
    resource: "Exam",
    action: "read",
    possession: "any",
  })
  async getExam(@graphql.Parent() parent: Student): Promise<Exam | null> {
    const result = await this.service.getExam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
