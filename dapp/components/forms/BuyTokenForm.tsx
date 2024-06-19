"use client";
import {
  Flex,
  VStack,
  Input,
  Text,
  Wrap,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

import useWeb3Provider from "@/hooks/useWeb3Provider";
import { useBuyToken } from "@/hooks/abis";
import { FaEthereum } from "react-icons/fa";

const BuyTokenForm = () => {
  const { buyToken, loading } = useBuyToken();
  const {
    state: { signer },
  } = useWeb3Provider();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      ethVal: "",
    },
  });
  const { ethVal } = getValues();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <VStack mt={8} align="left">
        <Text color="whiteAlpha.900" fontSize="1.8rem">
          Wallet Address
        </Text>
        <Flex flexDir="column" gap={2}>
          <Input
            colorScheme="orange"
            placeholder="Enter Wallet Address"
            size="lg"
            isDisabled
            defaultValue={signer?.address}
            _disabled={{ color: "white" }}
          />
        </Flex>

        <Text color="whiteAlpha.900" fontSize="1.8rem">
          Number of Ethereum Sent
        </Text>
        <Controller
          name="ethVal"
          control={control}
          rules={{
            required: "Enter eth value",
            validate: (value) => {
              if (typeof Number(value) !== "number") return "Enter only number";
              return parseFloat(value) > 0 ? true : "Enter a positive number";
            },
          }}
          render={({ field }) => (
            <InputGroup display="flex" flexDir="column">
              <InputLeftElement pointerEvents="none">
                <FaEthereum style={{ marginTop: 2 }} />
              </InputLeftElement>
              <Input
                {...field}
                colorScheme="orange"
                placeholder="Enter TOKEN PRICE(ETH)"
                size="lg"
                errorBorderColor="red.300"
                isInvalid={Boolean(errors.ethVal)}
              />
              {errors.ethVal && (
                <Flex>
                  <Text color="red.300">{errors.ethVal?.message}</Text>
                </Flex>
              )}
            </InputGroup>
          )}
        />
        <>
          <Text color="whiteAlpha.900" fontSize="1.8rem">
            Amount of tokens received
          </Text>
          <Input
            placeholder="Number of TOKEN"
            defaultValue={0}
            isDisabled
            // value={`${tokenAmount} TT`}
            // _disabled={{
            //   color: Number(tokenAmount) > 0 && "white",
            // }}
            size="lg"
          />
        </>
      </VStack>
      <Wrap mt={6}>
        <Button colorScheme="orange">
          Inquiry of the amount of TOKENs to be received
        </Button>
        <Button colorScheme="orange">Check the history</Button>
        <Button
          colorScheme="orange"
          variant="outline"
          isLoading={loading}
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
    </form>
  );
};

export default BuyTokenForm;
