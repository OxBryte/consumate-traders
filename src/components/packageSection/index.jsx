import React from 'react'
import ContainLayout from '../page-layout/container'
import { Heading, Mark, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

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
                                        <Th><Image src='/indices.svg' alt='' /> PACKAGE I</Th>
                                        <Th><Image src='/indices.svg' alt='' /> PACKAGE II</Th>
                                        <Th><Image src='/indices.svg' alt='' /> PACKAGE III</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>FUNDING AMOUNT</Td>
                                        <Td>$5,000</Td>
                                        <Td>$10,000</Td>
                                        <Td>$20,000</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>LEVERAGE</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>1:100</Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>MAXIMUM DAILY LOSS</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>5%</Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>MAX LOSS</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>10%</Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>PROFIT TARGET</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>
                                            Phase I = 10% (30-Days) <br/> 
                                            Phase II = 10% (30-Days)
                                        </Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>MIN TRADING DAYS</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>7 Days</Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>PROFIT SPLIT</Td>
                                        <Td><FaCheck/></Td>
                                        <Td>70%</Td>
                                        <Td><FaCheck/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>PURCHASE FEE</Td>
                                        <Td>$99</Td>
                                        <Td>$189</Td>
                                        <Td>$249</Td>
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
