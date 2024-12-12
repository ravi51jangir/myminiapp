"use client"; 
import { useReadContract } from "wagmi";
import { presaleAbi } from "@/constants/abi";
import { presaleAddress } from "@/constants/index";
import { useEffect, useState } from "react";

export function ReadContract() {
  // Read contract data
  const { data: price } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "price",
  });

  const { data: totalRaised } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "totalRaised",
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

  useEffect(() => {
    console.log(price, totalRaised, softCap, hardCap);
  }, [price, totalRaised, softCap, hardCap]);

  return (
    <div className="text-left my-8">
      <div className="text-2xl">
        <div>Presale Price: {price ? price.toString() : "Loading..."}</div>
        <div>Total Raised: {totalRaised ? totalRaised.toString() : "Loading..."}</div>
        <div>Soft Cap: {softCap ? softCap.toString() : "Loading..."}</div>
        <div>Hard Cap: {hardCap ? hardCap.toString() : "Loading..."}</div>
      </div>
    </div>
  );
}
