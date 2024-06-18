import { useState } from "react";
import useTokenContract from "../useTokenContract";
import { noExponents } from "@/utils/token-helper";
import { ethers } from "ethers";
import useWeb3Provider from "../useWeb3Provider";

export const useBuyToken = () => {
  const contract = useTokenContract();
  const {
    state: { signer },
  } = useWeb3Provider();
  const [loading, setLoading] = useState(false);

  const buyToken = async (value: number) => {
    if (!contract) return;
    setLoading(true);

    const etherAmount = noExponents((value * 10 ** 18).toString());
    const hexValue = parseInt((value * 10 ** 18).toString()).toString(16);
    // const exchangeAmount = await contract.getExchangeRate(etherAmount);
    const transferCalldata = contract.interface.encodeFunctionData("buyToken");
    console.log("transferCalldata >>", transferCalldata);

    try {
      await contract.buyToken({
        value: etherAmount,
      });

      window.ethereum?.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: signer?.address,
            to: process.env.NEXT_PUBLIC_ERC20,
            value: hexValue,
            data: transferCalldata,
          },
        ],
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { buyToken, loading };
};
