import { Image } from '@chakra-ui/image'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

export default function TestimonialCard() {
    return (
        <>
            <VStack align='left' bg='white' p='24px' gap='16px' rounded='16px'>
                <HStack align='center' gap='20px'>
                    <Box border='1px' borderColor='brand.600' rounded='12px'>
                        <Image src='pfp.png' alt='pfp' w='48px' />
                    </Box>
                    <Text fontSize='22px' fontWeight='700'>Awoniyi Ayomide</Text>
                </HStack>
                <Text fontSize='20px' color='brand.200' fontWeight='400'>“Consumate <Box as='span' color='brand.100'>Traders has transformed my trading journey.</Box> Their capital and support opened up new possibilities, and their guidance has been”</Text>
            </VStack>
        </>
    )
}
