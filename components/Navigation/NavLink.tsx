import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsCaretDown } from "react-icons/bs";

import PageLink from "../PageLink/PageLink";
import { NavLinkProps, Routes } from "../../interface";

const NavLink = ({ route, children }: NavLinkProps) => {
  const router = useRouter();
  const { href, name, children: sublinks } = route;
  const isActive = router.pathname === href ;

  return (
    <>
      {sublinks ? (
        <Menu>
          <MenuButton
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("blue.600", "blue.400"),
            }}
            textAlign={"left"}
            minW={0}
            cursor={"pointer"}
          >
            <HStack>
              <p>{name}</p>
              <Box pt={0.5}>
                <BsCaretDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList alignItems={"center"}>
            {sublinks.map((child: Routes, idx: number) => (
              <MenuItem
                _hover={{ color: useColorModeValue("gray.900", "blue.200") }}
                key={idx}
              >
                <PageLink
                  href={child.href}
                >
                  {child.name}
                </PageLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <PageLink
          href={href}
          color={isActive ? "blue.500" : "inherit"}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("blue.600", "blue.300"),
          }}
        >
          {children}
        </PageLink>
      )}
    </>
  );
};

export default NavLink;
