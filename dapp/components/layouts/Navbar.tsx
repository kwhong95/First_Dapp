import NextLink from "next/link";
import { Box, Container, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { ConnectWalletBtn } from "../buttons/ConnectWalletBtn";

export const Navbar = () => {
  return (
    <Box bgColor="blackAlpha.900" pos="fixed" w="100%">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" minH="52px">
          {/* Logo & Title */}
          <Flex align="center">
            <Image src="/logo.png" alt="LOGO" w="32px" h="32px" />
            <Heading ml={2} color="whiteAlpha.900" fontSize="18px">
              TIGHCOIN
            </Heading>
          </Flex>
          {/* Navigations */}
          <Flex color="whiteAlpha.900" fontSize="1.5rem" gap={6} align="center">
            <Link
              as={NextLink}
              href="/"
              _hover={{
                color: "orange.500",
                borderColor: "orange.500",
                borderBottom: "1px",
              }}
            >
              Go Home
            </Link>
            <Link
              as={NextLink}
              href="/"
              _hover={{
                color: "orange.500",
                borderColor: "orange.500",
                borderBottom: "1px",
              }}
            >
              What is Tighcoin?
            </Link>
            <ConnectWalletBtn />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
