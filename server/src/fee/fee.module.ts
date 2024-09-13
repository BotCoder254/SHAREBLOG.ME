import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeeModuleBase } from "./base/fee.module.base";
import { FeeService } from "./fee.service";
import { FeeResolver } from "./fee.resolver";

@Module({
  imports: [FeeModuleBase, forwardRef(() => AuthModule)],
  providers: [FeeService, FeeResolver],
  exports: [FeeService],
})
export class FeeModule {}
