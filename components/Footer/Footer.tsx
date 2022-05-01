import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

import ToggleTheme from "../Toggles/ToggleTheme";
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>By Eric Quelch | Made with Passion</Text>
        <Stack direction={"row"} spacing={4}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FiGithub />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <SiLinkedin />
          </SocialButton>
          <Box>
            <ToggleTheme size="sm" rounded="xl" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
