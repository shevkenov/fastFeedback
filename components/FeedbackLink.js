import { Link as ChakraLink, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

const FeedbackLink = ({ siteId }) => {
  return (
    <Link href={"/p/[siteId]"} passHref as={`/p/${siteId}`}>
      <ChakraLink fontWeight="medium" color="blue.500">
        <Text as='u'>View Feedback</Text>
      </ChakraLink>
    </Link>
  );
};

export default FeedbackLink;
