import { Injectable } from "@nestjs/common";
import { PostUpdateInput } from "../post/base/PostUpdateInput";

@Injectable()
export class EditorService {
  constructor() {}
  async ApprovePost(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeletePost(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EditPost(args: PostUpdateInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
