import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "12dfa5cb-9a6e-4d9a-a34c-6320f4346b84",
});

export type { GetPostsResult, GetPostResult };
