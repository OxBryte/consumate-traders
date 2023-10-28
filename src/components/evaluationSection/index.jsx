import React, { useState } from 'react'
import ContainLayout from '../page-layout/container'
import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

export default function EvaluationSection() {

    const [hover, setHover] = useState(false)
    const [hoverO, setHoverO] = useState(false)

    return (
        <>
            <ContainLayout>
                <VStack gap='64px' w='full' align='left' my={['80px', '160px']}>
                    <VStack align='left' w='full' gap='24px'>
                        <Heading color='brand.200' fontSize={['32px', '40px']} fontWeight={700}>We Fund. <Box as='span' color='brand.100'>You Trade.</Box> </Heading>
                        <Text color='brand.200' fontWeight={400} fontSize={['16px', '20px']} maxW='540px'>Complete our Trading Challenges to showcase your trading skills, experience, and risk management before commencing live trading with us.</Text>
                    </VStack>
                    <SimpleGrid columns={[1, 1, 1, 3]} gap='24px' w='full'>
                        <Box onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} rounded='16px' p='30px' border='1px' borderColor='brand.900' position='relative' overflow='hidden'>
                            <VStack w='full' gap='14px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Text fontWeight={700} fontSize='24px'>Phase I</Text>
                                    <Box p='2' rounded='8px' bg='brand.600'>
                                        <FaArrowRight />
                                    </Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px'>Phase I is the first step of the Evaluation Process. You need to succeed here to advance into the Confirmation stage. Demonstrate your trading skills and discipline in observing the Trading goals.</Text>
                            </VStack>
                            {hover && (
                                <Box position='absolute' bottom='-10%' left='-45%' w='400px' opacity={hover ? 1 : 0} transition='opacity 0.3s ease-in-out'>
                                    <Image src='hover-grad.svg' alt='' />
                                </Box>
                            )}
                        </Box>
                        <Box onMouseEnter={() => setHoverO(true)} onMouseLeave={() => setHoverO(false)} rounded='16px' p='30px' border='1px' borderColor='brand.900' position='relative' overflow='hidden'>
                            <VStack w='full' gap='14px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Text fontWeight={700} fontSize='24px'>Phase II</Text>
                                    <Box p='2' rounded='8px' bg='brand.600'>
                                        <FaArrowRight />
                                    </Box>
                                </Flex>
                                <Text color='brand.200' fontWeight={400} fontSize='20px'>This is the last phase towards becoming a Consummate Trader. Once you go through the confirmation phase and your results are verified, you will get the chance to trade for our Firm.</Text>
                            </VStack>
                            {hoverO && (
                                <Box position='absolute' bottom='-10%' left='-45%' w='400px' opacity={hoverO ? 1 : 0} transition='opacity 0.3s ease-in-out' >
                                    <Image src='hover-grad.svg' alt='' />
                                </Box>
                            )}
                        </Box>
                        <Box rounded='16px' p='30px' border='1px' borderColor='brand.900' bgGradient='linear(to-r, brand.300, brand.400)' _hover={{ bgGradient: 'linear(to-r, brand.400, brand.300)' }}>
                            <VStack w='full' gap='14px' align='left'>
                                <Flex align='center' justify='space-between' w='full'>
                                    <Text color='white' fontWeight={700} fontSize='24px'>Consummate Trader</Text>
                                    <Box p='2' rounded='8px' bg='white' color='brand.400'>
                                        <FaCheck />
                                    </Box>
                                </Flex>
                                <Text color='whiteAlpha.600' fontWeight={400} fontSize='20px'>You are now a trader of the Consummate Traders Proprietary Trading firm. Trade devotedly and consistently and receive up to 90% of your profits.</Text>
                            </VStack>
                        </Box>
                    </SimpleGrid>
                </VStack>
            </ContainLayout>
        </>
    )
}
