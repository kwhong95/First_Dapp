import { Button, Center, Container, Input, Text, Wrap } from "@chakra-ui/react";

export default function BuyToken() {
  return (
    <Center h="100vh" bg="black">
      <Container maxW="container.sm">
        <Text color="whiteAlpha.900" fontSize="3.5rem" fontWeight={600}>
          Buy Token
        </Text>
        <Text color="whiteAlpha.800" fontSize="2rem">
          Please fill in the form below
        </Text>
        <Wrap mt={8}>
          <>
            <Text color="whiteAlpha.900" fontSize="1.8rem">
              Wallet Address
            </Text>
            <Input
              colorScheme="orange"
              placeholder="Enter Wallet Address"
              size="lg"
            />
          </>
          <>
            <Text color="whiteAlpha.900" fontSize="1.8rem">
              Number of Ethereum Sent
            </Text>
            <Input
              colorScheme="orange"
              placeholder="Enter TOKEN PRICE(ETH)"
              size="lg"
            />
          </>
          <>
            <Text color="whiteAlpha.900" fontSize="1.8rem">
              Amount of tokens received
            </Text>
            <Input
              colorScheme="orange"
              placeholder="Number of TOKEN"
              size="lg"
            />
          </>
        </Wrap>
        <Wrap mt={6}>
          <Button colorScheme="orange">
            Inquiry of the amount of TOKENs to be received
          </Button>
          <Button colorScheme="orange">Check the history</Button>
          <Button colorScheme="orange" variant="outline">
            Buy TOKEN
          </Button>
          <Button colorScheme="red" variant="outline">
            Refresh
          </Button>
          <Button colorScheme="orange">Withdrawal</Button>
          <Button colorScheme="orange">Check withdrawal history</Button>
        </Wrap>
      </Container>
    </Center>
  );
}
