// usePresaleContract.js
"use client";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { presaleAbi, usdtAbi } from "@/constants/abi";
import { presaleAddress, usdtAddress } from "@/constants/index";
import { useAccount } from "wagmi";

export const usePresaleContract = () => {
    const { address } = useAccount();

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

    const { data: currentAllowance } = useReadContract({
        abi: usdtAbi,
        address: usdtAddress,
        functionName: "allowance",
        args: address ? [address, presaleAddress] : undefined,
        enabled: !!address, // Only run when address is available
    });

    // Write contract setup
    const { writeContract: writeApprove, data: approveHash } = useWriteContract();
    const { writeContract: writeBuy, data: buyHash } = useWriteContract();
    
    const { isLoading: isApproveConfirming } = useWaitForTransactionReceipt({
        hash: approveHash,
    });
    const { isLoading: isBuyConfirming } = useWaitForTransactionReceipt({
        hash: buyHash,
    });

    const approveUSDT = async (amount) => {
        if (!address) throw new Error("Wallet not connected");
        try {
            const amountInWei = parseEther(amount);
            const config = {
                abi: usdtAbi,
                address: usdtAddress,
                functionName: 'approve',
                args: [presaleAddress, amountInWei],
            };
            
            console.log("Sending approval transaction:", config);
            const hash = await writeApprove(config);
            console.log("Approval transaction hash:", hash);
            
            // Wait for approval confirmation
            while (isApproveConfirming) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            return hash;
        } catch (err) {
            console.error('Approval failed:', err);
            throw err;
        }
    };

    const buyTokens = async (amount) => {
        if (!amount || !address) throw new Error("Invalid amount or wallet not connected");
        try {
            const amountInWei = parseEther(amount);
            
            // Always check allowance first
            if (currentAllowance === undefined || currentAllowance < amountInWei) {
                console.log("Insufficient allowance, requesting approval");
                await approveUSDT(amount);
            }

            const config = {
                abi: presaleAbi,
                address: presaleAddress,
                functionName: 'buyTokens',
                args: [amountInWei],
            };
            
            console.log("Sending buy transaction:", config);
            const hash = await writeBuy(config);
            console.log("Buy transaction hash:", hash);
            return hash;
        } catch (err) {
            console.error('Buy failed:', err);
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
        isConfirming: isApproveConfirming || isBuyConfirming,
        currentAllowance,
        hash: buyHash || approveHash
    };
};