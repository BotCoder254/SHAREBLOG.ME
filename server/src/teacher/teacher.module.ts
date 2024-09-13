import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeacherModuleBase } from "./base/teacher.module.base";
import { TeacherService } from "./teacher.service";
import { TeacherResolver } from "./teacher.resolver";

@Module({
  imports: [TeacherModuleBase, forwardRef(() => AuthModule)],
  providers: [TeacherService, TeacherResolver],
  exports: [TeacherService],
})
export class TeacherModule {}
