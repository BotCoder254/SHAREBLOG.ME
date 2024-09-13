import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CourseModuleBase } from "./base/course.module.base";
import { CourseService } from "./course.service";
import { CourseResolver } from "./course.resolver";

@Module({
  imports: [CourseModuleBase, forwardRef(() => AuthModule)],
  providers: [CourseService, CourseResolver],
  exports: [CourseService],
})
export class CourseModule {}
