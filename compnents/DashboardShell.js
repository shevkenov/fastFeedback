import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import AddSite from "./AddSite";
import Logo from "./Logo";

const DashboardShell = ({ children }) => {
  return (
    <Box backgroundColor="gray.100" h="100vh" borderTop="5px solid #0AF5F4">
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
            <ChakraLink>Feedback</ChakraLink>
          </Link>
          <Link passHref href="/sites">
            <ChakraLink>Sites</ChakraLink>
          </Link>
        </Stack>
        <Stack direction="row" spacing="20px" align="center">
          <ChakraLink>Account</ChakraLink>
          <Avatar size="sm" />
        </Stack>
      </Flex>
      <Box width="70%" mx="auto" mt="50px">
        <Text color="gray.500">Sites</Text>
        <Flex justify="space-between">
          <Heading size="lg" mb={3}>
            My Sites
          </Heading>
          <AddSite colorScheme='teal'>+ Add Site</AddSite>
        </Flex>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardShell;
