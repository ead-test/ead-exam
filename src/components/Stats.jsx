import {
    Container,
    HStack,
    Heading,
    VStack,
    Box,
    Text,
  } from "@chakra-ui/react";
  
  function Stats() {
    return (
      <Container maxW="full" bg="gray.50">
        <Container maxW="container.lg" py={20}>
          <VStack spacing={20}>
            <Heading color="primary.500">Our Results in Numbers</Heading>
            <HStack justifyContent="space-between" width="100%">
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="primary.500">
                  99%
                </Text>
                <Text>Customer Satisfication</Text>
              </Box>
              <Box>
                <Text fontSize="5xl" fontWeight="bold" color="primary.500">
                  10,000+
                </Text>
                <Text>Customers Served</Text>
              </Box>
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="primary.500">
                  25M+
                </Text>
                <Text>Revenue Generated</Text>
              </Box>
            </HStack>
          </VStack>
        </Container>
      </Container>
    );
  }
  
  export default Stats;
  