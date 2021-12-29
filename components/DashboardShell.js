import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link as ChakraLink, Stack } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { useAuth } from "../lib/auth";
import Logo from "./Logo";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100vh" borderTop="5px solid #0AF5F4">
      {auth.user && (
        <Flex
          backgroundColor="white"
          align="center"
          justify="space-between"
          px="20px"
        >
          <Stack direction="row" spacing="24px" align="center">
            <Link passHref href="/">
              <ChakraLink>
                <Logo boxSize="20" />
              </ChakraLink>
            </Link>
            <Link passHref href="/feedback">
              <ChakraLink>Feedbacks</ChakraLink>
            </Link>
            <Link passHref href="/dashboard">
              <ChakraLink>Sites</ChakraLink>
            </Link>
          </Stack>
          {auth.user && (
            <Stack direction="row" spacing="20px" align="center">
              <ChakraLink onClick={() => auth.signoutUser()}>Logout</ChakraLink>
              <Avatar
                name={auth.user.name}
                src={auth.user.photoUrl}
                size="sm"
              />
            </Stack>
          )}
        </Flex>
      )}
      <Box width="70%" mx="auto" mt="50px">
        {children}
      </Box>
    </Box>
  );
};

export default DashboardShell;
