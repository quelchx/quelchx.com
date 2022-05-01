import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next/types";

import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";

import meta from "../constants/meta";
import getPosts from "../helpers/posts";
import filterCategories from "../helpers/filtered";

import {
  Animate,
  BlogHeading,
  BlogPosts,
  Categories,
  PageLayout,
  PageLink,
} from "../components";

import { BlogProps } from "../interface";

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const [articles, setArticles] = useState(posts);
  const categories = filterCategories(posts);

  const { title, description } = meta.blog;

  return (
    <PageLayout title={title} description={description}>
      <BlogHeading />
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          px={4}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem colSpan={1}>
            <Animate animation="fade-in" delay={300} duration={600}>
              <VStack alignItems="flex-start" spacing="10px">
                <chakra.h2 fontSize="3xl" fontWeight="700">
                  A Developers Blog
                </chakra.h2>
                <p>Search By Category</p>

                <Categories
                  articles={posts}
                  setArticles={setArticles}
                  categories={categories}
                />
              </VStack>
            </Animate>
          </GridItem>
          <Animate animation="fade-in" delay={600} duration={600}>
            <GridItem>
              <chakra.p fontSize={20} pt={1} pb={4}>
                Articles are about some of the current things I'm into. They
                might provide useful to whomever consumes it!
              </chakra.p>
              <PageLink href="/contact">
                <Button colorScheme="blue" size="md">
                  Make Suggestion
                </Button>
              </PageLink>
            </GridItem>
          </Animate>
        </Grid>
        <Divider mt={12} mb={12} />
        <BlogPosts posts={articles} />
      </Box>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getPosts() } };
};

export default Blog;
