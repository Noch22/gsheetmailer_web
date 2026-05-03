import type { CollectionEntry } from "astro:content";

export function isPublished(
  post: CollectionEntry<"blog">,
  now = new Date(),
): boolean {
  return post.data.publishDate.getTime() <= now.getTime();
}
