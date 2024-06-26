"use client";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { useSDK } from "@metamask/sdk-react";
import { ActionsMenu } from "../menus/ActionsMenu";
import { PiWallet } from "react-icons/pi";
import useWeb3Provider from "@/hooks/useWeb3Provider";

export const ConnectWalletBtn = () => {
  const { connectWallet, disconnect, state } = useWeb3Provider();

  return (
    <>
      {state.isAuthenticated ? (
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
          isDisabled={state.isAuthenticated}
          onClick={connectWallet}
        >
          Connect to Wallet
        </Button>
      )}
    </>
  );
};
