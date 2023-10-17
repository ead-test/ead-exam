import {
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="full" id="about">
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, 1, 2]} spacing={10}>
          <Box w="full" h="full" rounded="lg" overflow="hidden">
            <Image
              src="./about-background.jpg"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
          <VStack gap={6} alignItems="start">
            <Box>
              <Heading color="primary.500">ABOUT US</Heading>
              <Text fontSize="lg">
                At ShopSavvy++, we're more than just a company; we're a team of
                passionate individuals who are dedicated to enhancing your
                shopping experience. Our diverse team of experts in data
                analytics, machine learning, and augmented reality is committed
                to providing you with the best shopping solutions. We believe
                that by combining our talents and expertise, we can create a
                shopping platform that empowers you and simplifies your journey
                from product discovery to purchase. <br />{" "}
                <span style={{ fontWeight: "bold" }}>Our Mission:</span> Our
                mission is simple but powerful: to make shopping enjoyable,
                stress-free, and cost-effective for everyone. We aim to achieve
                this by harnessing the potential of emerging technologies like
                machine learning and augmented reality. By offering personalized
                recommendations, price comparisons, and the ability to virtually
                try products, we want to redefine the way you shop.
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                01
              </Heading>
              <Text>Pioneering Personalized Shopping Experiences</Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                02
              </Heading>
              <Text>Innovative Technology Meets Seamless Convenience</Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;
