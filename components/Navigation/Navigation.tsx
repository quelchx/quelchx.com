import React from "react";

import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
  Stack,
  IconButton,
  HStack,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";
import ToggleTheme from "../Toggles/ToggleTheme";
import ProfileAvatar from "../Avatar/ProfileAvatar";

import routes from "../../routes/routes";
import { Routes } from "../../interface";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      color={useColorModeValue("gray.700", "white")}
      bg={useColorModeValue("gray.100", "gray.900")}
      shadow="lg"
      px={4}
    >
      <Flex
        h={16}
        alignItems={"center"}
        gap={12}
        justifyContent={"space-around"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={12} alignItems={"center"}>
          <ProfileAvatar size="sm" />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {routes.map((link: Routes) => (
              <NavLink route={link} key={link.name}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <ToggleTheme />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {routes.map((link: Routes) => (
              <NavLink route={link} key={link.name}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
