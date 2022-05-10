---
title: How To Make A NextJS Blog With Markdown and TypeScript and TailwindCSS
date: "April 11, 2022"
category: ['Markdown', 'TypeScript', 'NextJS', 'CSS'] 
excerpt: If you like what NextJS can do and enjoy the simplicity of Markdown, check out this article to get something started.
cover_image: "https://seekicon.com/free-icon-download/file-markdown_2.svg"
---

# Getting Started:

**Note:** This guide will not include styling in order to save space and time.

## Creating a fresh Next Template

First thing is first -- we need to get a Next.js project started. We can do this by running `npx create-next-app@latest --ts` or `yarn create-next-app --typescript`. Use whichever package manager you prefer.

Once everything has installed, the next step is to install TailwindCSS and a few other packages. We can do this by `cd my-app && npm install -D tailwindcss postcss autoprefixer` or `cd my-app && yarn add -D tailwindcss postcss autoprefixer`, again use whichever package manager you prefer.

After this has finished, we can begin working on the application.

## Before we begin

The next step is to configure TailwindCSS to work with our application.

Create a file and name it `tailwind.config.js` inside the root directory (of the application).

Add the following lines of script to configure our setups.

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Then inside our `styles/global.css` file, add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you require more information about TailwindCSS and NextJS, visit https://tailwindcss.com/docs/guides/nextjs

## Folder structure and file structure

Inside the directory that holds your NextJS folders and files, create a folder named **posts**.

The posts directory will hold all of the markdown (`.md`) files for our blog that we can later extract information from (like an API)

Now lets create our first markdown file, which will be our blog post.

You can copy and paste the following below, but this will be the structure we will be working around. We will be naming the markdown file **first-blog-post.md**

##### first-blog-post.md

```md
---
title: Title
date: "April 1, 2022"
excerpt: This is an excerpt.
cover_image: "https://i.pinimg.com/originals/f3/c5/4f/f3c54f51a7cb9de02523e226d6b010b6.png"
---

## This is a blog post

lorem ipsum....
```

We can also generate another post with a similar structure --  name the filepath something different like **second-blog-post.md**.

Now we have two markdown files inside the **posts** directory that we can now grab some of its data in our NextJS application.

Now create a folder inside the **pages** directory and create a file called `[slug].tsx`. 

We won't be doing anything with it (for the moment) -- so we will touch basis on this later.

At this point your folder structure should look like this below:

```bash
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── api
│   │   └── hello.ts
│   ├── blog
│   │   └── [slug].tsx
│   └── index.tsx
├── posts
│   ├── first-blog-post.md
│   └── second-blog-post.md
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

Basically we should have all the scaffolding we need to make the magic happen. 

Next, we need to add the following inside the **pages/index.tsx** file.

We need to use NextJS built in method called `getStaticProps` in order to fetch the information from each file inside the posts directory.

Our index.tsx file should look like this:

**Note:** Before we move forward will need to install a package called matter -- `npm i matter` or `yarn add matter` so we can parse some markdown data within this file.

**pages/index.tsx**

```tsx
import matter from "gray-matter";
import fs from "fs";
import path from "path";

import type { GetStaticProps, NextPage } from "next";

import Article from "../components/Article";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
}

interface BlogProps {
  posts: Blog[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <section className="pt-10">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <div className="grid grid-cols-1 gap-0 my-6 md:grid-cols-2 md:gap-16">
          {posts.reverse().map((post: Blog) => {
            return (
              <div key={post.slug}>
                <Article article={post} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const posts = files.map((filename) => {
    const slug: string = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("src/posts", filename), "utf-8");

    const { data } = matter(markdown);

    return { slug, data };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
```

A couple of things are happening in this file.

With `getStaticProps` -- we can use NodeJS functions like `path` and `fs` to grab the data from the markdown files. Doing this would result in an error on the client end, but the `getStaticProps` function gets called before the client loads.

For more information about this, check out https://nextjs.org/docs/basic-features/data-fetching/get-static-props.

You may have noticed that there is an `<Article>` component we have not created yet. So let's do that, and then we can talk about whats occuring.

Create a folder called components and add a file called `Article.tsx`

**Article.tsx**

```tsx
import Link from "next/link";
import { Blog } from "../../types";

interface ArticleProps {
  article: Blog;
}

const Article = ({ article }: ArticleProps): JSX.Element => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <span className="rounded-lg cursor-pointer dark:border-gray-700">
        <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.data.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {article.data.excerpt}
        </p>
        <small>Posted {article.data.date}</small>
      </span>
    </Link>
  );
};

export default Article;
```

Inside this file we are passing a post in as a prop. This prop is wrapped around a `<Link>` tag that NextJS offers out of the box.

Doing this will redirect us to our `[slug].tsx` file we created earlier. At the moment -- the `[slug].tsx` has no markup or logic; we will get to that soon.

Note: The `[slug].tsx` file is a dynamic route.

For more information about dynamic routes, please visit https://nextjs.org/docs/routing/dynamic-routes.

## Next Steps

At this point we should have two simple blog posts showing, but if we click the link, it will redirect to an empty page. 

Before adding the code block, we need to install another package that will parse the Markdown into HTML. From your terminal, run `npm i @ts-stack/markdown` or `yarn add @ts-stack/markdown`

With the `[slug].js` file -- add the following markup and logic below.

**[slug].js**

```tsx
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Marked } from "@ts-stack/markdown";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
}

interface PostPageProps {
  data: Post;
  content: string;
  slug: string;
}

const PostPage: NextPage<PostPageProps> = ({ data, content }) => {
  let markup = Marked.parse(content);
  return (
    <div className="mx-10 my-12">
      <div className="mt-4">
        <h1 className="text-4xl sm:text-5xl">{data.title}</h1>
        <p className="py-2 leading-6">Posted: {data.date}</p>
        <section className="my-6">
          <div
            className="md"
            dangerouslySetInnerHTML={{ __html: markup }}
          ></div>
        </section>

        <Link href="/blog">
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

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

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".md"),
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
export default PostPage;
```

Alot is happening here. The `getStaticPaths` function NextJS offers will grab the respective path name, while `getStaticProps` will use the slug param to fetch the proper post we wish to display. If we click the link from the blog post we created in the `index.js` file, it should redirect and load the information we seek.

For a more in depth and detailed guide on these two NextJS functions, refer to their documentation for a better breakdown.

### What we have

By now, we should have two pages. Both should be functioning. When we create new markdown files inside the posts directory, they will be fetched and loaded to the front-end. When we click the links, they should direct to the post and its contents.

Everything should be style using some basic TailwindCSS.

It isn't much, but this should showcase the basic approach to creating a minimal, simple blog using Markdown and Next.js.

If you encounter any errors or issues, please drop a message in the contact form and let me know so I can adjust it. Or if you have any questions -- feel free to do so. http://quelchx.com/contact

I hope this helps someone.

Cheers!
