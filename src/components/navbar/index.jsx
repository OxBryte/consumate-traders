import React from 'react'
import { Box, Button, Flex, HStack, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'

export default function Navbar() {

  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Box as='nav' rounded='20px' bg='#F1FEF8' w='full' p='16px'>
        <Flex w='full' align='center' justify='space-between' >
          <Box>
            <Image src='/consumate_logo.svg' alt='' w='140px' />
          </Box>
          {isDesktop ? (
            <HStack align='center' gap='16px' textDecoration='none'>
              <Link to='/'>
                <Text textDecoration='none'>Trading Models</Text>
              </Link>
              <Link to='/'>
                <Text>Rules</Text>
              </Link>
              <Link to='/'>
                <Text>Help Center</Text>
              </Link>
              <Link to='/'>
                <Text>Affiliate</Text>
              </Link>
              <Link to='/'>
                <Text>About Us</Text>
              </Link>
              <Link to='/'>
                <Text>Resources</Text>
              </Link>
              <Button bg='brand.300' color='white'>Client Area</Button>
            </HStack>
          ) : (
            <Box>
              <BiMenu size={35} />
            </Box>
          )}
        </Flex >
      </Box >
    </>
  )
}
