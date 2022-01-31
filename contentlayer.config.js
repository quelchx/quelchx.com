/** https://github.com/contentlayerdev/contentlayer */
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "Description of the post",
      required: false,
    },
    tag: {
      type: "string",
      description: "Topic for the post to be tagged in",
      required: false,
    },
    image: {
      type: "string",
      description: "Image path for the blog post",
      required: false,
    },
    color: {
      type: "string",
      description: "Color for the tag",
      required: false,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  markdown: { rehypePlugins: [highlight] },
});
