import React, { useState } from "react";
import PageLink from "../PageLink/PageLink";
import { Grid, GridItem, Heading, Text, HStack, Tag } from "@chakra-ui/react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { Blog } from "../../interface";

const BlogPosts = ({ posts }: { posts: Blog[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
      }}
      mx={4}
      my={10}
      gap={{ base: "8", sm: "12", md: "16" }}
    >
      {posts.map((post, idx) => {
        const { title, excerpt, category, date } = post.data;
        return (
          <GridItem key={post.slug}>
            <PageLink _focus={{border: 'none'}} href={`/blog/${post.slug}`}>
              <Heading pb={4} size="lg" as="h3">
                {title}
              </Heading>
              <Text my={1}>{excerpt}</Text>
              <small>
                Posted {dayjs(date).fromNow()} on {date}
              </small>
              <HStack pt={4}>
                {category.map((category) => (
                  <Tag key={category}>{category}</Tag>
                ))}
              </HStack>
            </PageLink>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default BlogPosts;
