import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
import ContainLayout from "../page-layout/container";

function Lastcta() {
    return (
        <>
            <Box bgGradient='linear(to-r, brand.300, brand.400)' py='88px' w='full'>
                <ContainLayout>
                    <VStack w='full' textAlign='center' gap='36px'>
                        <Heading fontSize={['32px', '48px']} fontWeight={700} color='whiteAlpha.600'>Ready to start Trading <Box as='span' color='white'>SYNTHETICS</Box> with us?</Heading>
                        <Text fontSize={['16px','20px']} fontWeight={400} maxW='500px' color='whiteAlpha.600'>Lorem ipsum dolor sit amet consectetur. Nisi nisi tristique suscipit.</Text>
                        <Box as='a' border='1px' borderColor='brand.50' py='20px' px='40px' bg='white' rounded='20px' fontSize='24px' fontWeight={700}>Get started</Box>
                    </VStack>
                </ContainLayout>
            </Box>
        </>
    );
}

export default Lastcta;
