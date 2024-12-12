"use client";

import { useState, useEffect } from "react";
import { formatEther } from "viem";
import styles from "../css_modules/HOMEPAGE_3.module.css";
import { images } from "../StoreImages/StoreImages";
import ConnectButton from "@/components/shared/ConnectButton";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { usePresaleContract } from "../hooks/usePresaleContract";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { WriteContract } from "@/containers/contract/WriteContract";
import { ReadContract } from "@/containers/contract/ReadContract";

const HOMEPAGE_3 = dynamic(
  () =>
    Promise.resolve(() => {
      const router = useRouter();
      const { address, isConnected } = useAccount();
      const [amount, setAmount] = useState("");
      const [timeLeft, setTimeLeft] = useState("");
      const [isApproving, setIsApproving] = useState(false);
      const [isBuying, setIsBuying] = useState(false);
      const {
        contractData,
        buyTokens,
        isPending,
        isConfirming,
        isSuccess,
        currentAllowance,
        approveUSDT,
      } = usePresaleContract();

      const formatDisplayValue = (value) => (value ? parseFloat(formatEther(value)).toString() : "0");
      const formatKValue = (value) => {
        if (!value) return "0K";
        const number = parseFloat(formatEther(value));
        return number >= 1000 ? `${(number / 1000).toFixed(1)}K` : number.toString();
      };

      useEffect(() => {
        if (!contractData.endTime) return;

        const updateTimer = () => {
          const now = Math.floor(Date.now() / 1000);
          const remaining = Number(contractData.endTime) - now;

          if (remaining <= 0) {
            setTimeLeft("Presale ended");
            return;
          }

          const days = Math.floor(remaining / 86400);
          const hours = Math.floor((remaining % 86400) / 3600);
          const minutes = Math.floor((remaining % 3600) / 60);
          const seconds = remaining % 60;

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s LEFT`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
      }, [contractData.endTime]);

      const handleBuy = async () => {
        if (!isConnected || !amount) return;

        try {
          const amountInWei = parseFloat(amount);
          const allowance = parseFloat(formatEther(currentAllowance || "0"));

          if (allowance < amountInWei) {
            toast.info("Approving tokens...");
            setIsApproving(true);
            await approveUSDT(amount);
            setIsApproving(false);
            toast.success("Tokens approved!");
          }

          toast.info("Initiating purchase...");
          setIsBuying(true);
          await buyTokens(amount);

          if (isSuccess) {
            toast.success("Purchase successful!");
            setAmount("");
          }
        } catch (err) {
          setIsBuying(false);
          setIsApproving(false);
          toast.error("Transaction failed. Please try again.");
          console.error("Buy failed:", err);
        }
      };

      const calculateProgress = () => {
        if (!contractData.totalRaised || !contractData.hardCap) return 0;
        return (
          (Number(contractData.totalRaised) * 100) /
          Number(contractData.hardCap)
        );
      };

      return (
        <div className={styles.homePage3}>
          {/* Your UI elements and images */}
          {/* <img className={styles.neutonimageIcon} alt="" src={images.NeutonImage.src} />
          <img className={styles.neutonimagebg1Icon} alt="" src={images.NeutonImageBg1.src} />
          <img className={styles.neutonimagebg2Icon} alt="" src={images.NeutonImageBg2.src} />
          <img className={styles.neutonimagebg3Icon} alt="" src={images.NeutonImageBg3.src} /> */}
          <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground.src} />
          <img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons.src} />

          {/* Navigation Buttons */}
          <img className={styles.homeButtonIcon} src={images.HomeButton.src} alt="Home" onClick={() => router.push("/home")} style={{ cursor: "pointer" }} />
          <img className={styles.icoButtonIcon} src={images.ICOButton.src} alt="ICO" onClick={() => router.push("/ico")} style={{ cursor: "pointer" }} />
          <img className={styles.nftButtonIcon} src={images.NFTButton.src} alt="NFT" onClick={() => router.push("/nft")} style={{ cursor: "pointer" }} />
          <img className={styles.stackButtonIcon} src={images.StackButton.src} alt="Stack" onClick={() => router.push("/stack")} style={{ cursor: "pointer" }} />
          <img className={styles.notificationButtonIcon} src={images.NotificationButton.src} alt="Notifications" onClick={() => router.push("/notification")} style={{ cursor: "pointer" }} />

          {/* Wallet Connection Button */}
          <div className={styles.walletButton}>
            <ConnectButton />
          </div>

          {/* Listing Details */}
          <div className={styles.listingDetails}>LISTING DETAILS</div>
          <div className={styles.bitmart}>Bitmart</div>
          <div className={styles.neuton}>NEUTON</div>
          <div className={styles.div}>$12,451.8</div>
          <div className={styles.div1}>$120.5</div>
          <div className={styles.coindcx}>CoinDCX</div>
          <div className={styles.bitmartLogoellipse} />
          <div className={styles.coindcxLogoellipse} />
          <img className={styles.coindcxLogoIcon} alt="" src={images.CoinDCX_Logo.src} />
          <img className={styles.bitmartLogoIcon} alt="" src={images.BitMart_Logo.src} />
          <b className={styles.b}>.........................................................................</b>
          <b className={styles.b1}>.........................................................................</b>
          <div className={styles.buynewtonrec} />

          {/* Timer and Token Info */}
          <b className={styles.d02h20m}>{timeLeft}</b>
          <img className={styles.timerIcon} alt="" src={images.Timer.src} />

          {/* Hard and Soft Cap Info */}
          <div className={styles.hardCap}>HARD CAP</div>
          <b className={styles.kTon}>{formatKValue(contractData.hardCap)} TON</b>
          <img className={styles.hardcapIcon} alt="" src={images.HardCap.src} />
          <div className={styles.softCap}>SOFT CAP</div>
          <b className={styles.kTon1}>{formatKValue(contractData.softCap)} TON</b>
          <img className={styles.softcapIcon} alt="" src={images.SoftCap.src} />

          {/* Progress Bar */}
          <div className={styles.full} style={{ width: `${calculateProgress()}%` }} />
          <div className={styles.full80} style={{ width: `${calculateProgress() * 0.8}%` }} />

          {/* Amount Input and Buy Button */}
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className={styles.ton600} disabled={isPending || isConfirming || isBuying} />

          <button className={styles.buyNeuton} onClick={handleBuy} disabled={!isConnected || isPending || isConfirming || isBuying || !amount || parseFloat(amount) <= 0} style={{ cursor: isConnected && !isPending && !isConfirming && !isBuying && amount ? "pointer" : "not-allowed" }}>
            {isApproving ? "Approving tokens..." : isBuying ? "Processing..." : "Buy NEUTON"}
          </button>

          {/* Read/Write Contract Logic */}
          {isConnected ? (
            <>
              <ReadContract />
              <WriteContract />
            </>
          ) : (
            <div className="flex flex-col gap-4 items-center justify-center text-center text-2xl">
              Please Connect the Wallet
            </div>
          )}
        </div>
      );
    }),
  { ssr: false }
);

export default HOMEPAGE_3;
