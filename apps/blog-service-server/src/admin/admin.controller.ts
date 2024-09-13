import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Patch("/admin/users/:userId/activate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ActivateUserAccount(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ActivateUserAccount(body);
      }

  @common.Patch("/users/:userId/block")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BlockUnblockUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.BlockUnblockUser(body);
      }

  @common.Delete("/posts/:postId")
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

  @common.Patch("/users/:userId/disable")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DisableUserAccount(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DisableUserAccount(body);
      }

  @common.Patch("/admin/users/:userId/suspend")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SuspendUserAccount(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SuspendUserAccount(body);
      }

  @common.Patch("/users/:userId/verify")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyUserAccount(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.VerifyUserAccount(body);
      }

  @common.Get("/admin/audit-logs")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewAuditLogs(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ViewAuditLogs(body);
      }

  @common.Get("/admin/statistics")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewStatistics(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ViewStatistics(body);
      }

  @common.Get("/admin/users/analytics")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewUserAnalytics(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ViewUserAnalytics(body);
      }
}
