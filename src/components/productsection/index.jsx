import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import ContainLayout from "../page-layout/container";
import { Image } from "@chakra-ui/image";

function Productsection() {
    return (
        <>
            <ContainLayout>
                <VStack gap='64px' w='full' align='left' my='160px'>
                    <VStack align='left' w='full' gap='24px'>
                        <Heading color='brand.100' fontSize={['32px', '40px']} fontWeight={700}>Available Synthetics</Heading>
                        <Text color='brand.200' fontWeight={400} fontSize={['16px', '20px']} maxW='650px'>We offers 8 synthetic options in 4 groups for clients who want to trade anytime, anywhere. You can choose from a variety of pairs that suit your trading style and preferences.</Text>
                    </VStack>
                    <SimpleGrid columns={[1, 1, 1, 2]} gap='24px' w='full'>
                        <Box rounded='16px' p='24px' border='1px' borderColor='brand.900' _hover={{boxShadow: 'md'}}>
                            <VStack w='full' gap='24px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Flex gap='10px' align='center'>
                                        <Image src='indices.svg' alt='' />
                                        <Text fontWeight={700} fontSize='24px'>Power Indices</Text>
                                    </Flex>
                                    <Box display={["none", "none", "none", "block"]} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>Available on MT5</Box>
                                    <Box display={['block', 'block', 'block', 'none']} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>MT5</Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px' maxW='650px'>These instruments correspond to simulated market conditions with one tick generated every second for 100 and 200.</Text>
                                <Flex w='full' gap='16px'>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                </Flex>
                            </VStack>
                        </Box>
                        <Box rounded='16px' p='24px' border='1px' borderColor='brand.900'>
                            <VStack w='full' gap='24px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Flex gap='10px' align='center'>
                                        <Image src='indices.svg' alt='' />
                                        <Text fontWeight={700} fontSize='24px'>Power Indices</Text>
                                    </Flex>
                                    <Box display={["none", "none", "none", "block"]} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>Available on MT5</Box>
                                    <Box display={['block', 'block', 'block', 'none']} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>MT5</Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px' maxW='650px'>These instruments correspond to simulated market conditions with one tick generated every second for 100 and 200.</Text>
                                <Flex w='full' gap='16px'>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                </Flex>
                            </VStack>
                        </Box>
                        <Box rounded='16px' p='24px' border='1px' borderColor='brand.900'>
                            <VStack w='full' gap='24px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Flex gap='10px' align='center'>
                                        <Image src='indices.svg' alt='' />
                                        <Text fontWeight={700} fontSize='24px'>Power Indices</Text>
                                    </Flex>
                                    <Box display={["none", "none", "none", "block"]} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>Available on MT5</Box>
                                    <Box display={['block', 'block', 'block', 'none']} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>MT5</Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px' maxW='650px'>These instruments correspond to simulated market conditions with one tick generated every second for 100 and 200.</Text>
                                <Flex w='full' gap='16px'>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                </Flex>
                            </VStack>
                        </Box>
                        <Box rounded='16px' p='24px' border='1px' borderColor='brand.900'>
                            <VStack w='full' gap='24px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Flex gap='10px' align='center'>
                                        <Image src='indices.svg' alt='' />
                                        <Text fontWeight={700} fontSize='24px'>Power Indices</Text>
                                    </Flex>
                                    <Box display={["none", "none", "none", "block"]} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>Available on MT5</Box>
                                    <Box display={['block', 'block', 'block', 'none']} as='span' border='2px' rounded='full' px='16px' py='8px' fontSize='14px' fontWeight={700} color='brand.700' borderColor='brand.700' bg='brand.800'>MT5</Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px' maxW='650px'>These instruments correspond to simulated market conditions with one tick generated every second for 100 and 200.</Text>
                                <Flex w='full' gap='16px'>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                    <VStack w='full' p='16px' rounded='8px' gap='8px' align='left' bg='brand.600'>
                                        <Text fontWeight={700} fontSize='20px' color='brand.100'>Power Indices</Text>
                                        <Text fontWeight={500} fontSize='16px' color='brand.200'>Contract size: X</Text>
                                    </VStack>
                                </Flex>
                            </VStack>
                        </Box>
                    </SimpleGrid>
                </VStack>
            </ContainLayout>
        </>
    );
}

export default Productsection;
