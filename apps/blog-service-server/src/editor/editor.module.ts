import { Module } from "@nestjs/common";
import { EditorService } from "./editor.service";
import { EditorController } from "./editor.controller";
import { EditorResolver } from "./editor.resolver";

@Module({
  controllers: [EditorController],
  providers: [EditorService, EditorResolver],
  exports: [EditorService],
})
export class EditorModule {}
