import {
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Center bg="black" h="100vh">
      <Container maxW="container.sm">
        <Flex flexDir="column" justify="center" align="center" gap={6}>
          <Image w="492px" h="492px" src="/tiger.png" alt="TIGER" />
          <Heading fontSize="42px" color="whiteAlpha.900" textAlign="center">
            TIGHCOIN
          </Heading>
          <Text color="whiteAlpha.900" fontSize="26px">
            the people’s cryptocurrency
          </Text>
        </Flex>
      </Container>
    </Center>
  );
};
