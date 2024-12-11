// usePresaleContract.js
"use client";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { presaleAbi, usdtAbi } from "@/constants/abi";
import { presaleAddress, usdtAddress } from "@/constants/index";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import { useState, useEffect } from "react";

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
    const { 
        writeContract: writeApprove, 
        data: approveHash,
        isPending: isApprovePending,
        isError: approveWriteError
    } = useWriteContract();

    const { 
        writeContract: writeBuy, 
        data: buyHash,
        isPending: isBuyPending,
        isError: buyWriteError
    } = useWriteContract();
    
    const { 
        isLoading: isApproveConfirming,
        isSuccess: isApproveSuccess,
        error: approveError
    } = useWaitForTransactionReceipt({
        hash: approveHash,
    });

    const { 
        isLoading: isBuyConfirming,
        isSuccess: isBuySuccess,
        error: buyError
    } = useWaitForTransactionReceipt({
        hash: buyHash,
    });


     // Transaction status effects
     useEffect(() => {
        if (isApproveSuccess) {
            toast.success("Token approval successful");
        }
        if (approveError || approveWriteError) {
            toast.error("Token approval failed");
        }
    }, [isApproveSuccess, approveError, approveWriteError]);

    useEffect(() => {
        if (isBuySuccess) {
            toast.success("Purchase successful");
        }
        if (buyError || buyWriteError) {
            toast.error("Purchase failed");
        }
    }, [isBuySuccess, buyError, buyWriteError]);


    const approveUSDT = async (amount) => {
        if (!address) return;
        try {
            const amountInWei = parseEther(amount);
            await writeApprove({
                abi: usdtAbi,
                address: usdtAddress,
                functionName: 'approve',
                args: [presaleAddress, amountInWei],
            });
        } catch (err) {
            console.error('Approval failed:', err);
            throw err;
        }
    };

    const buyTokens = async (amount) => {
        if (!amount || !address) return;
        try {
            const amountInWei = parseEther(amount);
            console.log('check1');
            // Check allowance
            //if (currentAllowance === undefined || currentAllowance < amountInWei) {
                await toast.info("Approving tokens...");
                await approveUSDT(amount);
            //     return;
            // }

            await writeBuy({
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
        isPending: isApprovePending || isBuyPending,
        isConfirming: isApproveConfirming || isBuyConfirming,
        isSuccess: isApproveSuccess || isBuySuccess,
        currentAllowance,
    };
};