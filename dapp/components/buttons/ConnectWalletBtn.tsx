"use client";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { useSDK } from "@metamask/sdk-react";
import { ActionsMenu } from "../menus/ActionsMenu";
import { PiWallet } from "react-icons/pi";

export const ConnectWalletBtn = () => {
  const { sdk, connected, connecting } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <>
      {connected ? (
        <Flex align="center" gap={4}>
          <ActionsMenu />
          <Button colorScheme="red" variant="outline" onClick={disconnect}>
            Disconnect
          </Button>
        </Flex>
      ) : (
        <Button
          colorScheme="orange"
          leftIcon={<Icon as={PiWallet} />}
          variant="outline"
          isDisabled={connecting}
          onClick={connect}
        >
          Connect to Wallet
        </Button>
      )}
    </>
  );
};
