"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { MetaMaskProvider } from "@metamask/sdk-react";
import Web3ContextProvider from "@/contexts/Web3Context";

export function Providers({ children }: { children: React.ReactNode }) {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "tighcoin",
      url: host, // using the host constant defined above
    },
  };
  return (
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Web3ContextProvider>{children}</Web3ContextProvider>
        </ChakraProvider>
      </CacheProvider>
    </MetaMaskProvider>
  );
}
