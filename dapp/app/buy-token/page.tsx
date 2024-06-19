import BuyTokenForm from "@/components/forms/BuyTokenForm";
import { Center, Container, Text } from "@chakra-ui/react";

export default function BuyToken() {
  return (
    <Center h="100vh" bg="black">
      <Container maxW="container.sm">
        <Title />
        <BuyTokenForm />
      </Container>
    </Center>
  );
}

const Title = () => (
  <>
    <Text color="whiteAlpha.900" fontSize="3.5rem" fontWeight={600}>
      Buy Token
    </Text>
    <Text color="whiteAlpha.600" fontSize="1.6rem">
      Please fill in the form below
    </Text>
  </>
);
