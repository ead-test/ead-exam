import {
  SimpleGrid,
  Text,
  Heading,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";
import {
  Activity,
  Building,
  Cable,
  CircleDashed,
  CircleDot,
  GraduationCap,
  Laugh,
  PercentCircle,
  ScrollText,
  ShieldCheck,
  Star,
} from "lucide-react";

function Features() {
  return (
    <Container maxW="full" id="services">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={20}>
          <Box textAlign="center" fontWeight="bold">
            <Text fontSize="xl" color="primary.500">
              Features
            </Text>
            <Heading>Shopping Meets Technology</Heading>
          </Box>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <CircleDashed size={36} />
              </Box>
              <Heading fontSize="xl">Recommendations</Heading>
              <Text color="gray.500">
                Explore a world of products, deals, and recommendations tailored
                just for you
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <CircleDot size={36} />
              </Box>
              <Heading fontSize="xl">AR Tryouts</Heading>
              <Text color="gray.500">
                Virtually try products before purchase, from furniture to
                fashion, with our AR feature.
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <PercentCircle size={36} />
              </Box>
              <Heading fontSize="xl">Price Comparison</Heading>
              <Text color="gray.500">
                Effortlessly compare prices from various retailers at your
                fingertips
              </Text>
            </VStack>

            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <Star size={36} />
              </Box>
              <Heading fontSize="xl">Reviews and Ratings</Heading>
              <Text color="gray.500">
                Make informed decisions with insights from other shoppers
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <ScrollText size={36} />
              </Box>
              <Heading fontSize="xl">Wishlist</Heading>
              <Text color="gray.500">
                Keep track of your favorite items in your wishlist
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              border="1px"
              borderColor="gray.200"
              shadow="md"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                <Laugh size={36} />
              </Box>
              <Heading fontSize="xl">Awsome Experience</Heading>
              <Text color="gray.500">
                Enjoy a hassle-free and secure checkout process.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Container>
  );
}

export default Features;
