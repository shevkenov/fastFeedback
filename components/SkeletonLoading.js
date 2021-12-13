import { Skeleton } from '@chakra-ui/skeleton'
import React from 'react';
import { Table, Td, Th, Tr } from './Table';

const SkeletonRow = ({width}) => {
    return(
        <Tr>
            <Td>
                <Skeleton height="10px" width={width} my={4}></Skeleton>
            </Td>
            <Td>
                <Skeleton height="10px" width={width}  my={4}></Skeleton>
            </Td>
            <Td>
                <Skeleton height="10px" width={width}  my={4}></Skeleton>
            </Td>
            <Td>
                <Skeleton height="10px" width={width}  my={4}></Skeleton>
            </Td>
        </Tr>
    )
}

const LoadingSkeleton = () => {
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
                <SkeletonRow width={75}/>
                <SkeletonRow width={125}/>
                <SkeletonRow width={50}/>
                <SkeletonRow width={100}/>
            </tbody>
        </Table>
    )
}

export default LoadingSkeleton
