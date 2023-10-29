import React from 'react'
import ContainLayout from '../page-layout/container'
import { Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'

export default function PackageSection() {
    return (
        <>
            <ContainLayout>
                <VStack gap='64px' w='full' align='left' my={['80px', '160px']}>
                    <VStack align='left' w='full' gap='24px'>
                        <Heading color='brand.100' fontSize={['32px', '40px']} fontWeight={700}>Synthetics Package Tiers</Heading>
                        <Text color='brand.200' fontWeight={400} fontSize={['16px', '20px']} maxW='590px'>We offer a range of packages tailored to accommodate a diverse range of individuals, spanning from those with lower incomes to high earners.</Text>
                    </VStack>
                    <VStack w='full' border='1px' borderColor='brand.900' rounded='16px' p='8px'>
                        <TableContainer w='full'>
                            <Table variant='striped' colorScheme='blackAlpha'>
                                <Thead>
                                    <Tr>
                                        <Th></Th>
                                        <Th>into</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td isNumeric>25.4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>feet</Td>
                                        <Td>centimetres (cm)</Td>
                                        <Td>centimetres (cm)</Td>
                                        <Td isNumeric>30.48</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>yards</Td>
                                        <Td>metres (m)</Td>
                                        <Td>metres (m)</Td>
                                        <Td isNumeric>0.91444</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>
                </VStack>
            </ContainLayout>
        </>
    )
}
