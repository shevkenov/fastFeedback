import { formatISO } from 'date-fns';
import React from 'react';
import { Table, Td, Th, Tr } from './Table';

const SitesTable = ({sites}) => {
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
                {
                    sites.map((site,inx) => (
                        <Tr key={inx}>
                            <Td>{site.name}</Td>
                            <Td>{site.link}</Td>
                            <Td>Feedback</Td>
                            <Td>{formatISO(new Date(site.createdAt), { representation: 'date'})}</Td>
                        </Tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default SitesTable
