import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TableHeader = ({ text, children }) => {
  return (
    <>
      <Text color="gray.500">{text}</Text>
      <Flex justify="space-between">
        <Heading size="lg" mb={3}>
          My {text}
        </Heading>
        {children}
      </Flex>
    </>
  );
};

export default TableHeader;
