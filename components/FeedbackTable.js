import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Table, Td, Th, Tr } from "./Table";

import { removeFeedback } from "../lib/firestore";
import { useSWRConfig } from "swr";

const FeedbackTable = ({ feedbacks }) => {
  const { mutate } = useSWRConfig();
  const removeFback = async (id) => {
    mutate("/api/feedbacks");
    await removeFeedback(id);
  };
  return (
    <Table w="100%">
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Status</Th>
          <Th>Action</Th>
        </Tr>
      </thead>
      <tbody>
        {feedbacks.map((fback) => (
          <Tr key={fback.id}>
            <Td fontWeight="medium">Name</Td>
            <Td>{fback.text}</Td>
            <Td>route</Td>
            <Td>{fback.status}</Td>
            <Td textAlign="center">
              <IconButton
                variant="outline"
                colorScheme="black"
                aria-label="Remove feedback"
                icon={<DeleteIcon />}
                onClick={() => removeFback(fback.id)}
              />
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
