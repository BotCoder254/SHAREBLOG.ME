import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventModuleBase } from "./base/event.module.base";
import { EventService } from "./event.service";
import { EventResolver } from "./event.resolver";

@Module({
  imports: [EventModuleBase, forwardRef(() => AuthModule)],
  providers: [EventService, EventResolver],
  exports: [EventService],
})
export class EventModule {}
