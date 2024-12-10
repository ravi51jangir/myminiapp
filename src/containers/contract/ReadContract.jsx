"use client";
import { useReadContract } from "wagmi";
import { presaleAbi } from "@/constants/abi";
import { presaleAddress } from "@/constants/index";

export function ReadContract() {
  const {
    data: price,
    status,
    isLoading,
    error,
  } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "price",
  });

  console.log(price, status, isLoading, error);

  return (
    <div className="text-left my-8">
      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div className="text-red-500">Error</div>
      ) : (
        <div className="text-2xl">
          Current Number:{" "}
          <span className="text-rabble">{price?.toString()}</span>
        </div>
      )}
    </div>
  );
}
