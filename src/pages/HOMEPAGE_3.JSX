"use client";

import styles from '../css_modules/HOMEPAGE_3.module.css';
import { images } from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"
import { useRouter } from 'next/navigation';


const HOMEPAGE_3 = () => {
    const router = useRouter();
    return (
      <div className={styles.homePage3}>
        <img className={styles.neutonimageIcon} alt="" src={images.NeutonImage} />
        <img className={styles.neutonimagebg1Icon} alt="" src={images.NeutonImageBg1} />
        <img className={styles.neutonimagebg2Icon} alt="" src={images.NeutonImageBg2} />
        <img className={styles.neutonimagebg3Icon} alt="" src={images.NeutonImageBg3} />
        <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground} />
        <img
          className={styles.homeButtonIcon}
          alt=""
          src={images.HomeButton}
          onClick={onHomeButtonIconClick}
        />
        <img className={styles.notificationButtonIcon} alt="" src={images.NotificationButton} />
        <img className={styles.stackButtonIcon} alt="" src={images.StackButton} />
        <img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons} />
        <div className={styles.listingDetails}>LISTING DETAILS</div>
        <div className={styles.bitmart}>Bitmart</div>
        <div className={styles.neuton}>NEUTON</div>
        <div className={styles.div}>$12,451.8</div>
        <div className={styles.div1}>$120.5</div>
        <div className={styles.coindcx}>CoinDCX</div>
        <div className={styles.bitmartLogoellipse} />
        <div className={styles.coindcxLogoellipse} />
        <img className={styles.coindcxLogoIcon} alt="" src={images.CoinDCX_Logo} />
        <img className={styles.bitmartLogoIcon} alt="" src={images.BitMart_Logo} />
        <b className={styles.b}>.........................................................................</b>
        <b className={styles.b1}>.........................................................................</b>
        <div className={styles.buynewtonrec} />
        <img
          className={styles.icoButtonIcon}
          alt=""
          src={images.ICOButton}
          onClick={onHomeButtonIconClick}
        />
        <img
          className={styles.nftButtonIcon}
          alt=""
          src={images.NFTButton}
          onClick={onHomeButtonIconClick}
        />
        <div className={styles.hardcap} />
        <div className={styles.softcap} />
        <div className={styles.ton600} />
        <div className={styles.hardCap}>HARD CAP</div>
        <b className={styles.kTon}>10 K TON</b>
        <img className={styles.hardcapIcon} alt="" src={images.HardCap} />
        <div className={styles.profilerectangle} />
        <div className={styles.buynewtonrectangle} />
        <div className={styles.walletButton}>
          <ConnectButton />
        </div>
        <b className={styles.wxyz}>WXYZ</b>
        <b className={styles.buyNeuton}>BUY NEUTON</b>
        <b className={styles.b2}>600</b>
        <div className={styles.ton}>TON</div>
        <img className={styles.useropenicon} alt="" src={images.UserOpenIcon} />
        <img className={styles.userlogoIcon} alt="" src={images.UserLogo} />
        <img className={styles.telegramIcon} alt="" src={images.Telegram} />
        <img className={styles.twitterIcon} alt="" src={images.Twitter} />
        <img className={styles.webIcon} alt="" src={images.Web} />
        <img className={styles.papersIcon} alt="" src={images.Papers} />
        <img className={styles.netonimageIcon} alt="" src={images.NetonImage} />
        <div className={styles.homePage3Child} />
        <div className={styles.homePage3Item} />
        <div className={styles.homePage3Inner} />
        <div className={styles.min10Ton}>Min: 10 TON</div>
        <div className={styles.max500Ton}>Max: 500 TON</div>
        <div className={styles.tonBalance}>Ton Balance:</div>
        <div className={styles.ton1}>0.16333 TON</div>
        <div className={styles.buy12876321255Neuton}>
          Buy 1,2876,321,255 NEUTON
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.homePage3Child1} />
        <div className={styles.softCap}>SOFT CAP</div>
        <b className={styles.kTon1}>30 K TON</b>
        <img className={styles.softcapIcon} alt="" src={images.SoftCap} />
        <div className={styles.full} />
        <div className={styles.full80} />
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
        <img className={styles.calenderIcon} alt="" src={images.calender} />
        <img className={styles.calenderIcon1} alt="" src={images.calender} />
        <img className={styles.clockIcon} alt="" src={images.clock} />
        <img className={styles.clockIcon1} alt="" src={images.clock} />
        <b className={styles.d02h20m}>12d 02h 20m 48s LEFT</b>
        <img className={styles.timerIcon} alt="" src={images.Timer} />
      </div>
    );
  };
  
  export default HOMEPAGE_3;