import {
  Button,
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  Stack,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack w="full" spacing={4}>
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/untitled.jpg" alt="untitled" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Untitled Basquiat</Heading>
            <Text color="gray.600">BSQPAINT920931</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} w="full" alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Heading size="sm">$19.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (Estimated)</Text>
          <Heading size="sm">$25.00</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color="gray.600">Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
