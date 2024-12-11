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
        args: [address, presaleAddress],
    });

    // Write contract setup
    const { writeContract, data: hash } = useWriteContract();
    const { isLoading: isConfirming } = useWaitForTransactionReceipt({
        hash,
    });

    const approveUSDT = async (amount) => {
        try {
            writeContract({
                abi: usdtAbi,
                address: usdtAddress,
                functionName: 'approve',
                args: [presaleAddress, parseEther(amount)],
            });
        } catch (err) {
            console.error('Approval failed:', err);
            throw err;
        }
    };

    const buyTokens = async (amount) => {
        if (!amount) return;
        console.log("buyToken11");
        try {
            const amountInWei = parseEther(amount);
            console.log("buyToken22");
            console.log("currentAllowance",currentAllowance);
            console.log("amountInWei", amountInWei);
            // Check if current allowance is less than amount
            if (0 < amountInWei) {
                // If insufficient allowance, request approval first
                console.log("buyToken3");
                await approveUSDT(amount);
                // Wait for approval transaction
                await new Promise(resolve => setTimeout(resolve, 1000)); // Brief delay for transaction
            }

            // Proceed with buying tokens
            writeContract({
                abi: presaleAbi,
                address: presaleAddress,
                functionName: 'buyTokens',
                args: [amountInWei],
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
        approveUSDT,
        isConfirming,
        currentAllowance,
        hash
    };
};