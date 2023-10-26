import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import ContainLayout from "../page-layout/container";
import TestimonialCard from "./testimonialCard";

function Testimonial() {
    return (
        <>
            <Box w='full' backgroundImage="url('testimonial_bg.png')" backgroundPosition='center' backgroundSize='cover' backgroundRepeat="no-repeat">
                <ContainLayout>
                    <VStack w='full' py='104px' gap='64px' align='left'>
                        <VStack gap='24px' w='full' align='left'>
                            <Text fontSize='40px' fontWeight={700} color='whiteAlpha.800'>Real Stories, Real Impact.</Text>
                            <Text fontSize='20px' fontWeight={400} color='whiteAlpha.800' maxW={['full','410px']}>Lorem ipsum dolor sit amet consectetur. Feugiat sed vitae quam sagittis ante.</Text>
                        </VStack>
                        <SimpleGrid columns={[1, 1, 1, 1, 3]} gap='24px' w='full'>
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                        </SimpleGrid>
                    </VStack>
                </ContainLayout>
            </Box>
        </>
    );
}

export default Testimonial;
