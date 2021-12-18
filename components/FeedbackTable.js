import React from "react";
import { Table, Td, Th, Tr } from "./Table";

import { removeFeedback } from "../lib/firestore";
import { useSWRConfig } from "swr";
import { useAuth } from "../lib/auth";
import RemoveFeedbackButton from "./RemoveFeedbackButton";

const FeedbackTable = ({ feedbacks }) => {
  const { mutate } = useSWRConfig();
  const auth = useAuth();
  const removeFback = async (id) => {
      await removeFeedback(id);
      mutate(['/api/feedbacks', auth.user], async(data) => data.filter(fback => fback.id !== id));
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
            <Td fontWeight="medium">{fback.siteName}</Td>
            <Td>{fback.text}</Td>
            <Td>/</Td>
            <Td>{fback.status}</Td>
            <Td textAlign="center">
              <RemoveFeedbackButton id={fback.id} onRemove={removeFback}/>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
