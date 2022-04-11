---
title: How To Make A NextJS Blog With Markdown
date: "April 11, 2022"
excerpt: If you like what NextJS can do and enjoy the simplicity of Markdown, check out this article to get something started.
cover_image: "https://seekicon.com/free-icon-download/file-markdown_2.svg"
---


## Getting Started:

**Note:** This guide will not include styling in order to save space and time.

## Creating a fresh Next Template

First thing is first, we need to get a Next.js project started. We can do this by running `npx create-next-app@latest` or `yarn create-next-app` whichever you prefer.

After this is done we can begin working with a fresh project.

## Folder structure

Inside the directory that holds your NextJS folders and files, create a folder named **posts**.

This will hold all of the markdown (`.md`) files for our blog that we can lately extract information from.

Now lets create our first markdown file which will be our blog post.

You can copy and paste the following below but this will be the structure we will be working with. We will be naming the markdown file **first-blog-post.md**

##### first-blog-post.md

```md
---
title: Title
date: "April 1, 2022"
excerpt: This is an excerpt.
cover_image: "https://i.pinimg.com/originals/f3/c5/4f/f3c54f51a7cb9de02523e226d6b010b6.png"
---

# This is a blog post

lorem ipsum....
```

We can also generate another post with a similar structure -- just name the filepath something different like **second-blog-post.md**.

Now we have two markdown files inside the **posts** directory we can now grab some of its data in our NextJS application.

The next bit of logic we will be doing inside the **pages/index.js** file. We need to use NextJS built in method called `getStaticProps` in order to fetch the information from each file inside the posts directory.

Our index.js file should look like this:

**Note:** We will need to install a package called matter -- `npm i matter` in order to parse some markdown data.

##### pages/index.js

```jsx
import fs from "fs";
import path from "path";

import matter from "matter";

import Link from "next/link";

export default function Home({ posts }) {
  return (
    <section>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <h2>{post.data.title}</h2>
            <p>{post.data.excerpt}</p>
            <img src={post.data.cover_image} />
            <small>{post.data.date}</small>
            <Link href={`/blog/${post.slug}`}>
              <a>Read more</a>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export const getStaticProps = async () => {
  // grabbing files in the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // mapping through each file
  const posts = files.map((filename) => {
    // creating a slug by trimming .md off files name
    const slug = filename.replace(".md", "");
    // grabbing markdown data
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");

    // using matter to parse markdown
    const { data } = matter(markdown);

    return { slug, data };
  });

  return {
    props: {
      posts: posts,
    },
  };
};
```

### Get Static Props

With `getStaticProps` we can use NodeJS functions like `path` and `fs` to grab the data from the markdown files. We can use the returned props from this function inside the client. We have a `<Link>` to a page that hasn't been created yet.

## Next Steps

Now we should have 2 simple blog cards showing but if we click the link it will redirect to a 404 page.

We can now create a folder named **blog** inside the **pages** directory.

Create a file and name it **[slug].js**. This is a dynamic file that NextJS will detect.

Inside our `[slug].js` file we can add the following markup and logic.

##### [slug].js

```jsx
import fs from "fs";
import path from "path";
import matter from "matter";
import marked from "marked";

export default function PostPage({ data, content }) {
  const markup = marked.parse(content);
  return (
    <section>
      <h1>{data.title}</h1>
      <small>{data.excerpt}</small>
      <strong>{data.date}</strong>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </section>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      slug,
      content,
    },
  };
};
```

## Get Static Paths

Alot is happening here. The `getStaticPaths` function NextJS offers will grab the respective path name while `getStaticProps` will use the slug param to fetch the proper post we wish to display. Meaning if we click the link from the blog post we created in the `index.js` file it will redirect and load the proper information we seek.

#### What we have

By now we should have two pages and both should be functioning. When we create new markdown files inside the posts directory, they will be fetched and loaded to the front-end. When we click the links we should be directed to the post and its contents.

It isn't much but this should showcase the basic approach to creating a very minimal, simple blog using Markdown and Next.js. The styling and UI is left up to the imagination.

Cheers!
