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

const HOMEPAGE_3 = dynamic(
  () =>
    Promise.resolve(({ children }) => {
      const router = useRouter();
      const { isConnected } = useAccount();
      const [amount, setAmount] = useState("");
      const [timeLeft, setTimeLeft] = useState("");
      const { contractData, buyTokens, isPending, isConfirming, isSuccess } =
        usePresaleContract();

      // Format large numbers for display
      const formatDisplayValue = (value) => {
        if (!value) return "0";
        // Convert from wei to ETH and then format
        const formatted = formatEther(value);
        // Remove trailing zeros after decimal
        return parseFloat(formatted).toString();
      };

      // Format specifically for K notation (e.g., 10K TON)
      const formatKValue = (value) => {
        if (!value) return "0K";
        const formatted = formatEther(value);
        const number = parseFloat(formatted);
        if (number >= 1000) {
          return (number / 1000).toString() + "K";
        }
        return number.toString();
      };

      // Timer effect
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

      // Handle buy
      const handleBuy = async () => {
        console.log("check");
        if (!isConnected || !amount) return;
        try {
          await buyTokens(amount);
          // Clear amount on success
          if (isSuccess) {
            setAmount("");
          }
        } catch (err) {
          console.error("Buy failed:", err);
        }
      };

      // Calculate progress
      const calculateProgress = () => {
        if (!contractData.totalRaised || !contractData.hardCap) return 0;
        return Number(
          (contractData.totalRaised * BigInt(100)) / contractData.hardCap
        );
      };

      return (
        <div className={styles.homePage3}>
          <img
            className={styles.neutonimageIcon}
            alt=""
            src={images.NeutonImage.src}
          />
          <img
            className={styles.neutonimagebg1Icon}
            alt=""
            src={images.NeutonImageBg1.src}
          />
          <img
            className={styles.neutonimagebg2Icon}
            alt=""
            src={images.NeutonImageBg2.src}
          />
          <img
            className={styles.neutonimagebg3Icon}
            alt=""
            src={images.NeutonImageBg3.src}
          />
          <img
            className={styles.buttonsBackground}
            alt=""
            src={images.ButtonsBackground.src}
          />
          <img
            className={styles.cursorbuttonsIcon}
            alt=""
            src={images.CursorButtons.src}
          />
          <img
            className={styles.homeButtonIcon}
            src={images.HomeButton.src}
            alt="Home"
            onClick={() => router.push("/home")}
            style={{ cursor: "pointer" }}
          />
          <img
            className={styles.icoButtonIcon}
            src={images.ICOButton.src}
            alt="ICO"
            onClick={() => router.push("/ico")}
            style={{ cursor: "pointer" }}
          />
          <img
            className={styles.nftButtonIcon}
            src={images.NFTButton.src}
            alt="NFT"
            onClick={() => router.push("/nft")}
            style={{ cursor: "pointer" }}
          />
          <img
            className={styles.stackButtonIcon}
            src={images.StackButton.src}
            alt="Stack"
            onClick={() => router.push("/stack")}
            style={{ cursor: "pointer" }}
          />
          <img
            className={styles.notificationButtonIcon}
            src={images.NotificationButton.src}
            alt="Notifications"
            onClick={() => router.push("/notification")}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.listingDetails}>LISTING DETAILS</div>
          <div className={styles.bitmart}>Bitmart</div>
          <div className={styles.neuton}>NEUTON</div>
          <div className={styles.div}>$12,451.8</div>
          <div className={styles.div1}>$120.5</div>
          <div className={styles.coindcx}>CoinDCX</div>
          <div className={styles.bitmartLogoellipse} />
          <div className={styles.coindcxLogoellipse} />
          <img
            className={styles.coindcxLogoIcon}
            alt=""
            src={images.CoinDCX_Logo.src}
          />
          <img
            className={styles.bitmartLogoIcon}
            alt=""
            src={images.BitMart_Logo.src}
          />
          <b className={styles.b}>
            .........................................................................
          </b>
          <b className={styles.b1}>
            .........................................................................
          </b>
          <div className={styles.buynewtonrec} />

          <div className={styles.hardcap} />
          <div className={styles.softcap} />
          <div className={styles.ton600} />
          <div className={styles.hardCap}>HARD CAP</div>
          <b className={styles.kTon}>
            {formatKValue(contractData.hardCap)} TON
          </b>
          <img className={styles.hardcapIcon} alt="" src={images.HardCap.src} />
          <div className={styles.profilerectangle} />
          <div className={styles.buynewtonrectangle}></div>
          {/* <div 
                className={styles.buy12876321255Neuton}
                onClick={handleBuy}
                style={{ cursor: isConnected ? "pointer" : "default" }}
            >
                {isConfirming ? 'Processing...' : 'Buy NEUTON'}
        </div> */}
          <div className={styles.walletButton}>
            <ConnectButton />
          </div>
          <b className={styles.wxyz}>WXYZ</b>
          <div className={styles.buynewtonrectangle}>
            {/* Input for Amount */}
            <input
              type="number"
              // placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styles.ton600}
              disabled={isPending || isConfirming}
            />

            <button
              className={styles.buyNeuton}
              onClick={handleBuy}
              disabled={
                !isConnected ||
                isPending ||
                isConfirming ||
                !amount ||
                parseFloat(amount) <= 0
              }
              style={{
                cursor:
                  isConnected && !isPending && !isConfirming && amount
                    ? "pointer"
                    : "not-allowed",
              }}
            >
              {isPending
                ? "Waiting for approval..."
                : isConfirming
                ? "Processing..."
                : "Buy NEUTON"}
            </button>
          </div>
          <div className={styles.ton}>TON</div>
          <img
            className={styles.useropenicon}
            alt=""
            src={images.UserOpenIcon.src}
          />
          <img
            className={styles.userlogoIcon}
            alt=""
            src={images.UserLogo.src}
          />
          <img
            className={styles.telegramIcon}
            alt=""
            src={images.Telegram.src}
          />
          <img className={styles.twitterIcon} alt="" src={images.Twitter.src} />
          <img className={styles.webIcon} alt="" src={images.Web.src} />
          <img className={styles.papersIcon} alt="" src={images.Papers.src} />
          <img
            className={styles.netonimageIcon}
            alt=""
            src={images.NetonImage.src}
          />
          <div className={styles.homePage3Child} />
          <div className={styles.homePage3Item} />
          <div className={styles.homePage3Inner} />
          <div className={styles.min10Ton}>
            Min: {formatDisplayValue(contractData.minPurchase)} TON
          </div>
          <div className={styles.max500Ton}>
            Max: {formatDisplayValue(contractData.maxPurchase)} TON
          </div>
          <div className={styles.tonBalance}>Ton Balance:</div>
          <div className={styles.ton1}>
            {formatDisplayValue(contractData.userBalance)} TON
          </div>
          <div className={styles.buy12876321255Neuton}>
            Buy 1,2876,321,255 NEUTON
          </div>
          <div className={styles.rectangleDiv} />
          <div className={styles.homePage3Child1} />
          <div className={styles.softCap}>SOFT CAP</div>
          <b className={styles.kTon1}>
            {formatKValue(contractData.softCap)} TON
          </b>
          <img className={styles.softcapIcon} alt="" src={images.SoftCap.src} />
          <div
            className={styles.full}
            style={{ width: `${calculateProgress()}%` }}
          />
          <div
            className={styles.full80}
            style={{ width: `${calculateProgress() * 0.8}%` }}
          />

          <b className={styles.b3}>
            <span className={styles.txt}>
              <p className={styles.p}>10/11/2024</p>
              <p className={styles.p1}>16:30</p>
            </span>
          </b>
          <b className={styles.b4}>
            <span className={styles.txt}>
              <p className={styles.p}>30/11/2024</p>
              <p className={styles.p1}>16:30</p>
            </span>
          </b>
          <img
            className={styles.calenderIcon}
            alt=""
            src={images.calender.src}
          />
          <img
            className={styles.calenderIcon1}
            alt=""
            src={images.calender.src}
          />
          <img className={styles.clockIcon} alt="" src={images.clock.src} />
          <img className={styles.clockIcon1} alt="" src={images.clock.src} />
          <b className={styles.d02h20m}>{timeLeft}</b>
          <img className={styles.timerIcon} alt="" src={images.Timer.src} />
        </div>
      );
    }),
  { ssr: false }
);

export default HOMEPAGE_3;
