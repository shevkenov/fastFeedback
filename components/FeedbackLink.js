import { Link as ChakraLink } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

const FeedbackLink = ({ siteId }) => {
  return (
    <Link href={"/p/[siteId]"} passHref as={`/p/${siteId}`}>
      <ChakraLink >View Feedback</ChakraLink>
    </Link>
  );
};

export default FeedbackLink;
