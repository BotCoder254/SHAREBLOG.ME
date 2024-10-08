import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoleModuleBase } from "./base/role.module.base";
import { RoleService } from "./role.service";
import { RoleResolver } from "./role.resolver";

@Module({
  imports: [RoleModuleBase, forwardRef(() => AuthModule)],
  providers: [RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {}
