import {
    Container,
    Box,
    Image,
    Text,
    Link,
    Button,
    HStack,
    IconButton,
  } from "@chakra-ui/react";
  import { Menu, Search } from "lucide-react";
  import NavMenu from "./NavMenu";
  
  function Navbar() {
    return (
      <Container bg="white" maxW="full" position="absolute">
        <Container maxW="container.lg">
          <HStack w="full" justifyContent="space-between" alignItems="center" py={4}>
            <HStack alignItems="center">
              <Image src="./brand-logo.svg" w={26} />
              <Text fontWeight="bold" color="primary.500">ShopSavvy+</Text>
            </HStack>
            <HStack fontWeight="bold" gap={5} color="gray.600">
              <Link display={["none", "none", "block"]} href="#">Try AR</Link>
              <Link display={["none", "none", "block"]} href="#">Recommendations</Link>
              <Link display={["none", "none", "block"]} href="#">Cart</Link>
              <Button size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
              <NavMenu />
            </HStack>
          </HStack>
        </Container>
      </Container>
    );
  }
  
  export default Navbar;
  