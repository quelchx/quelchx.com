import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Redirect from "../Redirect/Redirect";
import Animate from "../Animate/Animate";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  const { hasCopied, onCopy } = useClipboard("quelchx@gmail.com");

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              pl={{ sm: "0px", md: "80px", lg: "100px" }}
            >
              Get in Touch
            </Heading>
            <Stack
              spacing={{ base: 4, md: 8, lg: 16 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="center"
                direction={{ base: "row", md: "column" }}
              >
                <Animate animation="fade-down" duration={500} delay={500}>
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
                </Animate>
                <Animate animation="fade-right" duration={750} delay={750}>
                  <Redirect href="http://github.com/quelchx">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Redirect>
                </Animate>
                <Animate animation="fade-right" duration={1000} delay={1000}>
                  <Redirect href="http://twitter.com/ericquelch">
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Redirect>
                </Animate>
                <Animate animation="fade-down" duration={1250} delay={1250}>
                  <Redirect href="https://www.linkedin.com/in/eric-quelch-768861201/">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Redirect>
                </Animate>
              </Stack>
              <Animate animation="fade-down" delay={1500} duration={1500}>
                {children}
              </Animate>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default FormWrapper;
