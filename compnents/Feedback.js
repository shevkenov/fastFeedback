import { Box, Divider, Heading, Text } from "@chakra-ui/layout";
import { format, parseISO } from "date-fns";
import React from "react";

const Feedback = ({ text, createdAt, author }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.900" fontWeight="medium">
        {author}
      </Heading>
      <Text color="gray.500" mb={0} fontSize="xs">
        {format(parseISO(createdAt), "PP k:mm")}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" backgroundColor="gray.200" mt={8} mb={8}/>
    </Box>
  );
};

export default Feedback;
