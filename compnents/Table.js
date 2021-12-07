import { Box } from "@chakra-ui/layout";
import React from "react";

export const Tr = (props) => {
  return (
    <Box
      as="tr"
      backgroundColor="gray.50"
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      height="40px"
      {...props}
    />
  );
};
export const Th = (props) => {
  return (
    <Box
      as="th"
      backgroundColor="gray.100"
      textTransform="uppercase"
      fontSize="xs"
      color="gray.500"
      fontWeight="medium"
      px={4}
      {...props}
    />
  );
};

export const Td = (props) => {
  return (
    <Box
      as="td"
      color="gray.900"
      p={4}
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      {...props}
    />
  );
};

export const Table = (props) => {
  return (
    <Box
      as="table"
      backgroundColor="white"
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  );
};
