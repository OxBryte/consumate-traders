import { Box, Text, Flex, VStack, Stack, Image, OrderedList, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import ContainLayout from '../page-layout/container'

export default function Footer() {
    return (
        <>
            <Box bg='brand.800' w='full' pt='130px'>
                <ContainLayout>
                    <VStack w='full' mb='56px' gap='56px'>
                        <VStack gap='32px' w='full' align='left' border='1px' rounded='16px' borderColor='brand.300' p='30px'>
                            <Box>
                                <Image src='consumate_logo_big.svg' alt='Consumate Traders Logo' />
                            </Box>
                            <Stack w='full' gap='40px' direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}>
                                <VStack align='left' gap='32px'>
                                    <VStack align='left' maxW={{ base: 'full', md: 'full', lg: '83%', xl: '390px' }} gap='10px'>
                                        <Text fontSize={20} fontWeight={600}>Subscribe now for the latest Consummate Traders Updates straight to your inbox.</Text>
                                        <Text fontSize={16} fontWeight={400}>We promise not to spam you and to send you only valuable content</Text>
                                    </VStack>
                                    <InputGroup position='relative' size='lg' minW='280px'>
                                        <Input type='email' placeholder='Enter email' pr='30%' />
                                        <InputRightElement w='124px'>
                                            <Button bg='#0A1818' color='white' h='36px' size='md'>
                                                Subscribe
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </VStack>
                                <Stack gap='36px' direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}>
                                    <VStack align='left' gap='20px'>
                                        <Text fontSize={20} fontWeight={600} >Quick links</Text>
                                        <OrderedList listStyleType='none' align='left' m='0' spacing='14px' color='brand.200'>
                                            <Text fontWeight={400} fontSize='14px'>Trading Models</Text>
                                            <Text fontWeight={400} fontSize='14px'>Affiliates</Text>
                                            <Text fontWeight={400} fontSize='14px'>Rules</Text>
                                            <Text fontWeight={400} fontSize='14px'>FAQs</Text>
                                            <Text fontWeight={400} fontSize='14px'>Help Center</Text>
                                            <Text fontWeight={400} fontSize='14px'>Status Page</Text>
                                        </OrderedList>
                                    </VStack>
                                    <VStack align='left' gap='20px'>
                                        <Text fontSize={20} fontWeight={600} >Resources</Text>
                                        <OrderedList listStyleType='none' align='left' m='0' spacing='14px' color='brand.200'>
                                            <Text fontWeight={400} fontSize='14px'>Webinars</Text>
                                            <Text fontWeight={400} fontSize='14px'>Blog</Text>
                                        </OrderedList>
                                    </VStack>
                                    <VStack align='left' gap='20px'>
                                        <Text fontSize={20} fontWeight={600} >Quick links</Text>
                                        <OrderedList listStyleType='none' align='left' m='0' spacing='14px' color='brand.200'>
                                            <Text fontWeight={400} fontSize='14px'>About Us</Text>
                                            <Text fontWeight={400} fontSize='14px'>Terms of Service</Text>
                                        </OrderedList>
                                    </VStack>
                                    <VStack align='left' gap='20px'>
                                        <Text fontSize={20} fontWeight={600} >Get in touch</Text>
                                        <OrderedList listStyleType='none' align='left' m='0' spacing='14px' color='brand.200'>
                                            <Text fontWeight={400} fontSize='14px'>support@consummatetraders.com</Text>
                                            <Text fontWeight={400} fontSize='14px'>+1 (866) 835-2310</Text>
                                        </OrderedList>
                                    </VStack>
                                </Stack>
                            </Stack>
                            <Flex w='full' justifyContent={['left', 'right']} gap='16px' mt={['0px', '-55px']}>
                                <Image src='facebook.svg' alt='' />
                                <Image src='linkedin.svg' alt='' />
                                <Image src='instagram.svg' alt='' />
                                <Image src='whatsapp.svg' alt='' />
                                <Image src='twitter.svg' alt='' />
                                <Image src='discord.svg' alt='' />
                            </Flex>
                        </VStack>
                        <Text color='brand.1000' fontSize='14px' fontWeight={400}>All information provided on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! <br /> <br /> Consummate Traders is managed by Kwakol Markets Pty Limited</Text>
                    </VStack>
                </ContainLayout>
                <Flex justify='center' w='full' p='10px' bg='brand.500' fontSize='16px' fontWeight={600} color="whiteAlpha.600" textAlign='center'>Created by the best minds of Consummate Traders © 2023.</Flex>
            </Box>
        </>
    )
}
