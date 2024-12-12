"use client";

import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { presaleAbi, usdtAbi } from "@/constants/abi";
import { presaleAddress, usdtAddress } from "@/constants/index";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import { useEffect } from "react";

export const usePresaleContract = () => {
  const { address } = useAccount();

  // Log connected address
  useEffect(() => {
    if (address) {
      console.log(`Connected Address: ${address}`);
    }
  }, [address]);

  // Read Contract States
  const { data: price } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "price",
  });

  const { data: softCap } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "softCap",
  });

  const { data: hardCap } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "hardCap",
  });

  const { data: totalRaised } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "totalRaised",
  });

  const { data: startTime } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "startTime",
  });

  const { data: endTime } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "endTime",
  });

  const { data: minPurchase } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "minPurchase",
  });

  const { data: maxPurchase } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "maxPurchase",
  });

  const { data: userBalance } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "contributions",
    args: [address],
  });

  // Log user balance
  useEffect(() => {
    if (userBalance) {
      console.log(`User Balance: ${userBalance}`);
    }
  }, [userBalance]);

  const { data: currentAllowance } = useReadContract({
    abi: usdtAbi,
    address: usdtAddress,
    functionName: "allowance",
    args: address ? [address, presaleAddress] : undefined,
    enabled: !!address, // Only run when address is available
  });

  // Log current allowance
  useEffect(() => {
    if (currentAllowance) {
      console.log(`Current Allowance: ${currentAllowance}`);
    }
  }, [currentAllowance]);

  // Write Contracts
  const {
    writeContract: writeApprove,
    data: approveHash,
    isPending: isApprovePending,
    isError: approveWriteError,
  } = useWriteContract();

  const {
    writeContract: writeBuy,
    data: buyHash,
    isPending: isBuyPending,
    isError: buyWriteError,
  } = useWriteContract();

  // Wait for Transaction Receipt
  const {
    isLoading: isApproveConfirming,
    isSuccess: isApproveSuccess,
    error: approveError,
  } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  const {
    isLoading: isBuyConfirming,
    isSuccess: isBuySuccess,
    error: buyError,
  } = useWaitForTransactionReceipt({
    hash: buyHash,
  });

  // Toast Notifications for Transactions
  useEffect(() => {
    if (isApproveSuccess) {
      toast.success("Token approval successful");
      console.log(`Approval Successful: ${approveHash}`);
    }
    if (approveError || approveWriteError) {
      toast.error("Token approval failed");
      console.error("Approval Error:", approveError || approveWriteError);
    }
  }, [isApproveSuccess, approveError, approveWriteError]);

  useEffect(() => {
    if (isBuySuccess) {
      toast.success("Purchase successful");
      console.log(`Purchase Successful: ${buyHash}`);
    }
    if (buyError || buyWriteError) {
      toast.error("Purchase failed");
      console.error("Purchase Error:", buyError || buyWriteError);
    }
  }, [isBuySuccess, buyError, buyWriteError]);

  // Approve USDT
  const approveUSDT = async (amount) => {
    if (!address) return;
    try {
      const amountInWei = parseEther(amount);
      console.log(`Approving ${amount} USDT for presale...`);
      await writeApprove({
        abi: usdtAbi,
        address: usdtAddress,
        functionName: "approve",
        args: [presaleAddress, amountInWei],
      });
    } catch (err) {
      console.error("Approval failed:", err);
      throw err;
    }
  };

  // Buy Tokens with Gas Estimation
  const buyTokens = async (amount) => {
    if (!amount || !address) return;
    try {
      const amountInWei = parseEther(amount);

      // Check and Approve Allowance
      if (!currentAllowance || BigInt(currentAllowance) < BigInt(amountInWei)) {
        console.log("Allowance insufficient, approving tokens...");
        toast.info("Approving tokens...");
        await approveUSDT(amount);
      } else {
        console.log("Allowance sufficient, proceeding with purchase...");
      }

      

      // Proceed with Buying Tokens
      await writeBuy({
        abi: presaleAbi,
        address: presaleAddress,
        functionName: "buyTokens",
        args: [amountInWei],
      });
    } catch (err) {
      console.error("Buy failed:", err);
      toast.error("Token purchase failed");
      throw err;
    }
  };

  return {
    contractData: {
      price,
      softCap,
      hardCap,
      totalRaised,
      startTime,
      endTime,
      minPurchase,
      maxPurchase,
      userBalance,
    },
    buyTokens,
    approveUSDT,
    isPending: isApprovePending || isBuyPending,
    isConfirming: isApproveConfirming || isBuyConfirming,
    isSuccess: isApproveSuccess || isBuySuccess,
    currentAllowance,
  };
};
