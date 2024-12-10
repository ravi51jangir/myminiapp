// usePresaleContract.js
"use client";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { presaleAbi } from "@/constants/abi";
import { presaleAddress } from "@/constants/index";
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

    // Write contract setup
    const { writeContract, data: hash } = useWriteContract();
    const { isLoading: isConfirming } = useWaitForTransactionReceipt({
        hash,
    });

    const buyTokens = async (amount) => {
        if (!amount) return;
        try {
            writeContract({
                abi: presaleAbi,
                address: presaleAddress,
                functionName: 'buyTokens',
                args: [parseEther(amount)],
            });
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
        isConfirming,
        hash
    };
};