import { Box, Flex, Heading, SimpleGrid, VStack, } from "@chakra-ui/layout";
import ContainLayout from "../page-layout/container";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion";

function Faq() {
    return (
        <>
            <ContainLayout>
                <VStack gap='64px' w='full' align='left' my='160px'>
                    <Heading color='brand.200' fontSize='40px' fontWeight={700}>Got Questions? <br /> <Box as='a' color='brand.100'>We've Got Answers.</Box></Heading>
                    <Box bg='brand.600' p={['32px', '56px']} rounded='16px'>
                        <Accordion allowToggle>
                            <SimpleGrid columns={[1, 1, 1, 1, 2]} gap='24px' w='full'>
                                <AccordionItem border='none' bg='white' rounded='16px' p='24px' h='fit-content'>
                                    <AccordionButton p='0' _hover={{ bg: 'none' }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={600} fontSize={['16px', '20px']} color='brand.100'>
                                            What is synthetic trading?
                                        </Box>
                                        <AccordionButton w='fit' _hover={{ bg: 'none' }} px='10px' py='10px' rounded='8px' color='blackAlpha.600' bg='brand.600' _expanded={{ bg: '#172929', color: 'white' }}>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </AccordionButton>
                                    <AccordionPanel fontWeight={400} fontSize='16px' px='0' py='16px' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none' bg='white' rounded='16px' p='24px' h='fit-content'>
                                    <AccordionButton p='0' _hover={{ bg: 'none' }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={600} fontSize={['16px', '20px']} color='brand.100'>
                                            What is synthetic trading?
                                        </Box>
                                        <AccordionButton w='fit' _hover={{ bg: 'none' }} px='10px' py='10px' rounded='8px' color='blackAlpha.600' bg='brand.600' _expanded={{ bg: '#172929', color: 'white' }}>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </AccordionButton>
                                    <AccordionPanel fontWeight={400} fontSize='16px' px='0' py='16px' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none' bg='white' rounded='16px' p='24px' h='fit-content'>
                                    <AccordionButton p='0' _hover={{ bg: 'none' }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={600} fontSize={['16px', '20px']} color='brand.100'>
                                            What is synthetic trading?
                                        </Box>
                                        <AccordionButton w='fit' _hover={{ bg: 'none' }} px='10px' py='10px' rounded='8px' color='blackAlpha.600' bg='brand.600' _expanded={{ bg: '#172929', color: 'white' }}>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </AccordionButton>
                                    <AccordionPanel fontWeight={400} fontSize='16px' px='0' py='16px' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none' bg='white' rounded='16px' p='24px' h='fit-content'>
                                    <AccordionButton p='0' _hover={{ bg: 'none' }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={600} fontSize={['16px', '20px']} color='brand.100'>
                                            What is synthetic trading?
                                        </Box>
                                        <AccordionButton w='fit' _hover={{ bg: 'none' }} px='10px' py='10px' rounded='8px' color='blackAlpha.600' bg='brand.600' _expanded={{ bg: '#172929', color: 'white' }}>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </AccordionButton>
                                    <AccordionPanel fontWeight={400} fontSize='16px' px='0' py='16px' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none' bg='white' rounded='16px' p='24px' h='fit-content'>
                                    <AccordionButton p='0' _hover={{ bg: 'none' }}>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={600} fontSize={['16px', '20px']} color='brand.100'>
                                            What is synthetic trading?
                                        </Box>
                                        <AccordionButton w='fit' _hover={{ bg: 'none' }} px='10px' py='10px' rounded='8px' color='blackAlpha.600' bg='brand.600' _expanded={{ bg: '#172929', color: 'white' }}>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </AccordionButton>
                                    <AccordionPanel fontWeight={400} fontSize='16px' px='0' py='16px' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </SimpleGrid>
                        </Accordion>
                    </Box>
                </VStack>
            </ContainLayout>
        </>
    );
}

export default Faq;
