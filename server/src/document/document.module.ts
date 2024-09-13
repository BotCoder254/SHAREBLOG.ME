import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DocumentModuleBase } from "./base/document.module.base";
import { DocumentService } from "./document.service";
import { DocumentResolver } from "./document.resolver";

@Module({
  imports: [DocumentModuleBase, forwardRef(() => AuthModule)],
  providers: [DocumentService, DocumentResolver],
  exports: [DocumentService],
})
export class DocumentModule {}
