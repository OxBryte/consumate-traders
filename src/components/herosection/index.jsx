import { Avatar, AvatarGroup, Box, Flex, Heading, Image, SimpleGrid, Text, VStack, } from "@chakra-ui/react";
import Navbar from "../navbar";
import ContainLayout from "../page-layout/container";

function Herosection() {
    return (
        <>
            <Box w='full' maxH={{ base: '1495px', md: '1643px', lg: '1040px' }} py='24px' bgGradient='linear(to-r, brand.400, brand.300)' mb='300px'>
                <ContainLayout>
                    <Navbar />
                    <VStack mt='80px' w='full' justify='center' align='center' position='relative'>
                        <VStack w='full' align='left' gap='56px'>
                            <VStack w='full' align='left' gap='24px'>
                                <Heading fontWeight={700} fontSize={['32px', '48px']} color='whiteAlpha.600'>Trade Beyond Boundaries <br /> With <Box as='span' color='white'>SYNTHETICS</Box> </Heading>
                                <Text maxW='600px' fontWeight={400} fontSize={['16px', '24px']} color='whiteAlpha.600'>You are now a trader of the Consummate Traders Proprietary Trading firm. Trade devotedly and consistently and receive up to 90% of your profits. Lastly, for synthetic accounts, the profit split does not go beyond 70%, 90% is written here.</Text>
                            </VStack>
                            <Flex flexDirection={['column-reverse', 'row']} gap='24px' align={['left', 'center']}>
                                <Box as='a' border='1px' borderColor='brand.50' py='20px' px='40px' w='fit-content' bg='white' rounded='20px' fontSize='24px' fontWeight={700} >Get started</Box>
                                <Flex align='center' gap='16px'>
                                    <AvatarGroup size={['xs', 'md']} max={4}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    </AvatarGroup>
                                    <Text fontWeight={700} fontSize={['14px', '20px']} color='whiteAlpha.600'>Join 10k+ Traders </Text>
                                </Flex>
                            </Flex>
                            <Box display={{ base: 'block', lg: 'none' }} maxW='720px' borderWidth='5px' borderColor='whiteAlpha.300' rounded='16px' overflow='hidden'>
                                <Image src='/hero-img.png' alt='' />
                            </Box>
                        </VStack>
                    </VStack>
                    <Box position='absolute' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }} top='3%' left='60%' w='880px' borderWidth='5px' borderColor='whiteAlpha.300' rounded='16px' overflow='hidden'>
                        <Image src='/hero-img.png' alt='' />
                    </Box>
                    <SimpleGrid columns={[1, 1, 1, 1, 2]} bg='brand.800' rounded='24px' borderWidth='1px' p='40px' mt='260px' borderColor='brand.400' gap='24px' w='full'>
                        <VStack align='left' gap='18px'>
                            <Flex align='center' gap='16px'>
                                <Image src='/logo-with-border.svg' alt='' />
                                <Text fontWeight={700} fontSize={['22px', '24px']} color='brand.100'>24/7 Trading</Text>
                            </Flex>
                            <Text fontWeight={400} fontSize={['16px', '20px']} color='brand.200'>Continuous access to trading, including weekends and public holidays, ensuring uninterrupted investment possibilities and adaptability.</Text>
                        </VStack>
                        <VStack align='left' gap='18px'>
                            <Flex align='center' gap='16px'>
                                <Image src='/logo-with-border.svg' alt='' />
                                <Text fontWeight={700} fontSize={['22px', '24px']} color='brand.100'>High Volatility</Text>
                            </Flex>
                            <Text fontWeight={400} fontSize={['16px', '20px']} color='brand.200'>Owing to the elevated volatility, there's a heightened probability of attaining larger profits and potential for capital growth.</Text>
                        </VStack>
                        {/* <VStack align='left' gap='18px'>
                            <Flex align='center' gap='16px'>
                                <Image src='/logo-with-border.svg' alt='' />
                                <Text fontWeight={700} fontSize={['22px', '24px']} color='brand.100'>24/7 Trading</Text>
                            </Flex>
                            <Text fontWeight={400} fontSize={['16px', '20px']} color='brand.200'>Due to its pronounced volatility, there's an increased likelihood of achieving greater profits and capital growth potential.</Text>
                        </VStack> */}
                    </SimpleGrid>
                </ContainLayout>
            </Box>
        </>
    );
}

export default Herosection;
