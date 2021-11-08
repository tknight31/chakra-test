import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

export default function Home() {
  // for responsiveness. [<480px, 480px<768px, >768px]
  // for responsiveness. { base: "column-reverse", md: "row" }
  return (
    <Container maxW="container.xl" p="0">
      <Flex
        h={{ base: "row", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
