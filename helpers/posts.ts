import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPosts() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename: string) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data } = matter(markdown);
    return { slug, data };
  });

  return posts;
}
