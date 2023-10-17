import { Container, Avatar, Heading, Text, VStack } from "@chakra-ui/react";

function Testimonial() {
  return (
    <Container maxW="full" bg="gray.50">
      <Container maxW="container.lg" py={20}>
        <VStack justifyContent="center" alignItems="center" textAlign="center">
          <Avatar src="./person.jpg" size="2xl" />
          <Heading mt={2}>Simantha John</Heading>
          <Text fontSize="xl" mt={5} color="gray.600">
            ShopSavvy++ has made my shopping smarter and more enjoyable. I can't
            imagine shopping without it! The AR feature is a game-changer.
            Trying before buying is now a reality. Finding the best deals and
            personalized recommendations has never been easier.
          </Text>
        </VStack>
      </Container>
    </Container>
  );
}

export default Testimonial;
