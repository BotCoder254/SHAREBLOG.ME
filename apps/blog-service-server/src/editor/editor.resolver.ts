import * as graphql from "@nestjs/graphql";
import { PostUpdateInput } from "../post/base/PostUpdateInput";
import { EditorService } from "./editor.service";

export class EditorResolver {
  constructor(protected readonly service: EditorService) {}

  @graphql.Mutation(() => String)
  async ApprovePost(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ApprovePost(args);
  }

  @graphql.Mutation(() => String)
  async DeletePost(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeletePost(args);
  }

  @graphql.Mutation(() => String)
  async EditPost(
    @graphql.Args()
    args: PostUpdateInput
  ): Promise<string> {
    return this.service.EditPost(args);
  }
}
