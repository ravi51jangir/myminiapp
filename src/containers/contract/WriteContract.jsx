"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePresaleContract } from "@/hooks/usePresaleContract";  // Import the hook

export function WriteContract() {
  const [amount, setAmount] = useState("");  // State for the amount of tokens to buy
  const {
    buyTokens,
    isPending,
    isConfirming,
    isSuccess,
    currentAllowance,
  } = usePresaleContract();  // Get contract functions and state from the custom hook

  const handleBuy = async (e) => {
    e.preventDefault();
    try {
      await buyTokens(amount);
    } catch (err) {
      console.error("Error buying tokens:", err);
    }
  };

  return (
    <form onSubmit={handleBuy} className="my-8">
      <p className="text-sm text-gray-500">Buy tokens during the presale</p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          name="amount"
          placeholder="Amount (USDT)"
          type="number"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-black text-white rounded-full"
        />
        <Button
          disabled={isPending || isConfirming || !amount}
          type="submit"
          variant={"rabble"}
          size={"one-third"}
        >
          {isPending ? "Confirming..." : isConfirming ? "Confirming..." : "Buy Tokens"}
        </Button>
      </div>

      {isSuccess && <p className="text-green-500 mt-4">Transaction Successful</p>}
      {!isSuccess && currentAllowance && (
        <p className="text-yellow-500 mt-4">Allowance: {currentAllowance.toString()}</p>
      )}
    </form>
  );
}
