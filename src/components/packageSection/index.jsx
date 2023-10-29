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
                                        <Th>PACKAGE I</Th>
                                        <Th>PACKAGE II</Th>
                                        <Th>PACKAGE III</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>FUNDING AMOUNT</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>MAXIMUM DAILY LOSS</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>MAX LOSS</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>LEVERAGE</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>PROFIT TARGET</Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
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
