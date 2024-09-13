import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudentModuleBase } from "./base/student.module.base";
import { StudentService } from "./student.service";
import { StudentResolver } from "./student.resolver";

@Module({
  imports: [StudentModuleBase, forwardRef(() => AuthModule)],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
