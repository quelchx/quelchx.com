import React from "react";
import type { GetStaticProps, NextPage } from "next";

import {
  Box,
  Text,
  Flex,
  Heading,
  Stack,
  UnorderedList,
  ListItem,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Button,
} from "@chakra-ui/react";
import { HiOutlineCursorClick } from "react-icons/hi";

import getPosts from "../helpers/posts";

import { Animate, PageLayout, PageLink, ProfileAvatar } from "../components";
import { BlogProps } from "../interface";

const HomePage: NextPage<BlogProps> = ({ posts }) => {
  const filtered = posts.filter((val, idx) => idx > 1);

  return (
    <PageLayout>
      <Flex gap={8} alignItems="center" direction={"column"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, sm: 12 }}
          mx={20}
          mt={{ base: 12, sm: 20 }}
          pr={{ base: 0, lg: 20, xl: 40 }}
        >
          <Animate animation="fade-down" delay={300} duration={500}>
            <ProfileAvatar size="xl" />
          </Animate>
          <Flex gap={2} flexDirection="column" mt={6}>
            <Animate animation="fade-left">
              <Heading as="h1" size="2xl">
                Hello World{" "}
                <chakra.span cursor="pointer" className="hvr-buzz-out">
                  👋
                </chakra.span>
              </Heading>
            </Animate>
            <Animate animation="fade-left" duration={400} delay={500}>
              <Text fontSize="2xl">
                My name is Eric and I'm a Full Stack Developer and an open
                source geek from Canada 🇨🇦.
              </Text>
              <Text fontSize="xl">
                This is my digital paradise, where I write about the things I'm
                working on and share what I've learned.
              </Text>
            </Animate>
          </Flex>
        </Flex>
        <Flex
          width={{ sm: "80%", lg: "50%" }}
          justify="flex-start"
          mt={{ base: 0, xl: 6 }}
          mx={20}
        >
          <Stack gap={6}>
            <Heading>Latest From Me</Heading>
            <Box
              color={useColorModeValue("gray.700", "white")}
              bg={useColorModeValue("gray.100", "gray.600")}
              borderLeft={"3px solid"}
              borderColor={useColorModeValue("blue.500", "blue.300")}
              ml={2}
              p={4}
            >
              <Heading py={2} as="h2" size="md">
                What I have been up to
              </Heading>
              <UnorderedList>
                <ListItem>Graduated College this April 2022</ListItem>
                <ListItem>Trying to land my first position</ListItem>
                <ListItem>Writing blogs and coding until I find a job</ListItem>
                <ListItem>Contuning to learn more things each day</ListItem>
              </UnorderedList>
            </Box>
            <SimpleGrid columns={1} spacing={8}>
              {filtered.map((post, idx: number) => (
                <Flex
                  key={idx}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  shadow="lg"
                  _hover={{ shadow: "2xl" }}
                  rounded={2}
                  p={4}
                  direction="column"
                  gap={2}
                >
                  <Heading as="h3" fontSize="lg">
                    {post.data.title}
                  </Heading>
                  <Text>{post.data.excerpt}</Text>
                  <PageLink href={`/blog/${post.slug}`}>
                    <Button colorScheme={"blue"}>Read Article</Button>
                  </PageLink>
                </Flex>
              ))}
              <Flex
                pb={8}
                color={useColorModeValue("blue.600", "blue.300")}
                justify="center"
              >
                <PageLink href="/blog">More Articles</PageLink>
                <Box p={1}>
                  <HiOutlineCursorClick />
                </Box>
              </Flex>
            </SimpleGrid>
          </Stack>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getPosts() } };
};

export default HomePage;
