"use client";
import { useState } from "react";
import { useBuyToken } from "@/hooks/abis";
import {
  Button,
  Center,
  Container,
  Flex,
  Input,
  Text,
  Wrap,
} from "@chakra-ui/react";
import useWeb3Provider from "@/hooks/useWeb3Provider";

export default function BuyToken() {
  const { state } = useWeb3Provider();
  const { buyToken, loading } = useBuyToken();

  // Form data
  const [ethVal, setEthVal] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");

  const onChangeEth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEthVal(e.target.value);
    setTokenAmount((Number(e.target.value) * 1000).toString());
  };

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
            <Flex flexDir="column" gap={2}>
              <Input
                colorScheme="orange"
                placeholder="Enter Wallet Address"
                size="lg"
                isDisabled
                defaultValue={state.signer?.address}
                _disabled={{ color: "white" }}
              />
              <Text>Please check your wallet address</Text>
            </Flex>
          </>
          <>
            <Text color="whiteAlpha.900" fontSize="1.8rem">
              Number of Ethereum Sent
            </Text>
            <Input
              colorScheme="orange"
              placeholder="Enter TOKEN PRICE(ETH)"
              size="lg"
              onChange={onChangeEth}
            />
          </>
          <>
            <Text color="whiteAlpha.900" fontSize="1.8rem">
              Amount of tokens received
            </Text>
            <Input
              colorScheme="orange"
              placeholder="Number of TOKEN"
              defaultValue={0}
              value={`${tokenAmount} TT`}
              isDisabled
              _disabled={{
                color: Number(tokenAmount) > 0 && "white",
              }}
              size="lg"
            />
          </>
        </Wrap>
        <Wrap mt={6}>
          <Button colorScheme="orange">
            Inquiry of the amount of TOKENs to be received
          </Button>
          <Button colorScheme="orange">Check the history</Button>
          <Button
            colorScheme="orange"
            variant="outline"
            onClick={() => buyToken(Number(ethVal))}
          >
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
