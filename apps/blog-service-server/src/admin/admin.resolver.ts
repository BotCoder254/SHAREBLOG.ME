import * as graphql from "@nestjs/graphql";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Mutation(() => String)
  async ActivateUserAccount(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ActivateUserAccount(args);
  }

  @graphql.Mutation(() => String)
  async BlockUnblockUser(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.BlockUnblockUser(args);
  }

  @graphql.Mutation(() => String)
  async DeletePost(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeletePost(args);
  }

  @graphql.Mutation(() => String)
  async DisableUserAccount(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DisableUserAccount(args);
  }

  @graphql.Mutation(() => String)
  async SuspendUserAccount(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SuspendUserAccount(args);
  }

  @graphql.Mutation(() => String)
  async VerifyUserAccount(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.VerifyUserAccount(args);
  }

  @graphql.Query(() => String)
  async ViewAuditLogs(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ViewAuditLogs(args);
  }

  @graphql.Query(() => String)
  async ViewStatistics(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ViewStatistics(args);
  }

  @graphql.Query(() => String)
  async ViewUserAnalytics(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ViewUserAnalytics(args);
  }
}
