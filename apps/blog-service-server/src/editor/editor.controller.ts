import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EditorService } from "./editor.service";
import { PostUpdateInput } from "../post/base/PostUpdateInput";

@swagger.ApiTags("editors")
@common.Controller("editors")
export class EditorController {
  constructor(protected readonly service: EditorService) {}

  @common.Patch("/editor/posts/:postId/approve")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApprovePost(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ApprovePost(body);
      }

  @common.Delete("/editor/posts/:postId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeletePost(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeletePost(body);
      }

  @common.Patch("/editor/posts/:postId/edit")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EditPost(
    @common.Body()
    body: PostUpdateInput
  ): Promise<string> {
        return this.service.EditPost(body);
      }
}
