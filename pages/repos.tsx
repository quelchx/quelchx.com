import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
} from "@chakra-ui/react";

import { Animate, PageLayout, RepoCard, Skeleton } from "../components";

import meta from "../constants/meta";

const RespositoryPage: NextPage = () => {
  const [repos, setRepos] = useState<[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=user:quelchx+sort:author-date-asc`
    )
      .then((res) => res.json())
      .then((data) => {
        let latest = data.items.slice(0, 10);
        setRepos(latest);
        setInterval(() => setLoading(false), 1000);
      });
  }, []);

  const { title, description } = meta.repos;

  return (
    <PageLayout title={title} description={description}>
      <chakra.div px={[8, null, 12]} mx="auto" maxWidth="7xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify="space-between"
          mt={20}
          mb={4}
        >
          <Heading
            fontSize={{ sm: "48px", md: "60px", lg: "72px" }}
            fontWeight="bold"
            textAlign={{ base: "center", lg: "left" }}
          >
            Latest Code
          </Heading>
          <Button bg="purple.800" size={"lg"}>
            <Link
              href="http://github.com/quelchx"
              target="_blank"
              referrerPolicy="origin"
              color='white'
            >
              My Github
            </Link>
          </Button>
        </Flex>
      </chakra.div>
      {loading && (
        <Flex justify={"center"} direction="column" mx={12}>
          <Skeleton />
        </Flex>
      )}
      {!loading && (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
          <Divider mt={2} mb={6} />
          <Grid
            mx={20}
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={{ sm: "8", md: "12" }}
          >
            {repos!.map((repo, idx) => (
              <Animate
                key={idx}
                animation="fade-in"
                delay={(idx + 1) * 100}
              >
                <GridItem>
                  <RepoCard repo={repo} />
                </GridItem>
              </Animate>
            ))}
          </Grid>
        </Box>
      )}
    </PageLayout>
  );
};

export default RespositoryPage;
