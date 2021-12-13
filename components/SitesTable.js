import { format } from "date-fns";
import React from "react";
import FeedbackLink from "./FeedbackLink";
import { Table, Td, Th, Tr } from "./Table";

const SitesTable = ({ sites }) => {
  return (
    <Table w="100%">
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date added</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Tr key={site.id}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>{site.link}</Td>
            <Td>
              <FeedbackLink siteId={site.id}> Feedback</FeedbackLink>
            </Td>
            <Td>{format(new Date(site.createdAt), "yyyy-MM-dd k:m:s")}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SitesTable;
