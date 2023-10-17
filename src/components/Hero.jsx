import {
  Container,
  Image,
  Box,
  VStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW="full">
      <Container maxW="container.md" w="full" h="100vh">
        <VStack h="full" w="full" alignItems="center" justifyContent="center">
          <Box
            maxH="70%"
            w="full"
            overflow={"hidden"}
            rounded="2xl"
            position="relative"
          >
            <Image
              src="./hero-background.jpg"
              h="full"
              w="full"
              objectFit="cover"
            />
            {/* <Box
              position="absolute"
              w="full"
              h="full"
              top={0}
              left={0}
              bgGradient="linear(to-t,white 0%, black 50%)"
              opacity={0.5}
            ></Box> */}
            <VStack
              position="absolute"
              w="full"
              h="full"
              top={0}
              left={0}
              zIndex={10}
              color="white"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              padding={10}
            >
              <Heading fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold">
                Where Shopping Meets Technology
              </Heading>
              <Text fontSize="xl">
                Your Ultimate Shopping companion integrated with technologies,
                that revolutionise your experience.
              </Text>
              <Button>Shop Now</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
}

export default Hero;
