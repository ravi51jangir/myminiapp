// usePresaleContract.js
"use client";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useState, useEffect } from "react";
import { parseEther, formatEther } from 'viem';
import { presaleAbi, usdtAbi } from "@/constants/abi";
import { presaleAddress, usdtAddress } from "@/constants/index";
import { useAccount } from "wagmi";

export const usePresaleContract = () => {
    const { address } = useAccount();

    const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMetaMaskInstalled(!!window.ethereum);
        }
    }, []);


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
    const { writeContract, data: hash } = useWriteContract();
    const { isLoading: isConfirming } = useWaitForTransactionReceipt({
        hash,
    });

   const approveUSDT = async (amount) => {
        if (!window.ethereum) {
            console.error('MetaMask not installed');
            return;
        }

        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            const result = await writeContract({
                abi: usdtAbi,
                address: usdtAddress,
                functionName: 'approve',
                args: [presaleAddress, parseEther(amount)],
            });
            
            return result;
        } catch (err) {
            console.error('Approval failed:', err);
            throw err;
        }
    };

    const buyTokens = async (amount) => {
        if (!amount || !address || !window.ethereum) {
            console.error('MetaMask not installed or not connected');
            return;
        }

        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            const amountInWei = parseEther(amount);
            
            // Check allowance and approve if needed
            if (!currentAllowance || currentAllowance < amountInWei) {
                await approveUSDT(amount);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            // Buy tokens
            const result = await writeContract({
                abi: presaleAbi,
                address: presaleAddress,
                functionName: 'buyTokens',
                args: [amountInWei],
            });
            
            return result;
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
        metaMaskInstalled,
        hash
    };
};