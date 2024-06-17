import { useMemo } from "react";
import { IWeb3Context, useWeb3Context } from "./Web3Context";
import abi from "@/services/abi/erc20";
import { Contract } from "ethers";

const ADDRESS = process.env.NEXT_PUBLIC_ERC20;

const useTighTokenContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () => state.signer && new Contract(ADDRESS!, abi.abi, state.signer),
    [state.signer]
  );
};

export default useTighTokenContract;
