"use client";

import styles from '../css_modules/HOMEPAGE.module.css';
import { images } from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"
import { useRouter } from 'next/navigation';

const HOMEPAGE = () => {
  const router = useRouter();
 
  return (
    <div className={styles.homePage1}>
      <img className={styles.altcoinbgIcon} alt="" src={images.AltcoinBg.src} />
      <div className={styles.profilerectangle} />
      
      <img className={styles.userlogoIcon} alt="" src={images.UserLogo.src} />
      <b className={styles.wxyz}>WXYZ</b>
      
      <img className={styles.useropenicon} alt="" src={images.UserOpenIcon.src} />
      <div className={styles.walletButton}>
        <ConnectButton/>
      </div>
      <div className={styles.altcoinrec} />
      <div className={styles.tokenpricerec} />
      <img className={styles.days12leftIcon} alt="" src={images.Days12Left.src} />
      <b className={styles.altcoinist}>ALTCOINIST</b>
      <div 
        className={styles.homePage1Child} 
        onClick={() => router.push('/home')}
        style={{ cursor: 'pointer' }}
      />
      <div 
        className={styles.homePage1Item} 
        onClick={() => router.push('/home2')}
        style={{ cursor: 'pointer' }}
      />
      <div 
        className={styles.homePage1Inner} 
        onClick={() => router.push('/home3')}
        style={{ cursor: 'pointer' }}
      />
      
      <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground.src} />
      <img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons.src} />
      <img
        className={styles.homeButtonIcon}
        src={images.HomeButton.src}
        alt="Home"
        onClick={() => router.push('/')}
        style={{ cursor: "pointer" }}
      />
      <img
        className={styles.icoButtonIcon}
        src={images.ICOButton.src}
        alt="ICO"
        onClick={() => router.push('/ico')}
        style={{ cursor: "pointer" }}
      />
      <img
        className={styles.nftButtonIcon}
        src={images.NFTButton.src}
        alt="NFT"
        onClick={() => router.push('/nft')}
        style={{ cursor: "pointer" }}
      />
      <img
        className={styles.stackButtonIcon}
        src={images.StackButton.src}
        alt="Stack"
        onClick={() => router.push('/stack')}
        style={{ cursor: "pointer" }}
      />
      <img
        className={styles.notificationButtonIcon}
        src={images.NotificationButton.src}
        alt="Notifications"
        onClick={() => router.push('/notification')}
        style={{ cursor: "pointer" }}
      />
      <b className={styles.apply}>Apply To Organize ICO</b>
      <div className={styles.apply1}>Apply to organize an ICO by ensuring compliance with legal and regulatory requirements.</div>
      <img className={styles.altcoinimgIcon} alt="" src={images.AltcoinImg.src} />
      <img className={styles.activeborderimageIcon} alt="" src={images.ActiveBorderImage.src} />
      <b className={styles.active}>ACTIVE</b>
      <img className={styles.applynowIcon} alt="" src={images.ApplyNow.src} />
      <b className={styles.tokenPrice}>TOKEN PRICE</b>
      <b className={styles.b}>
        <span className={styles.txt}>
          <p className={styles.p}>10/11/2024         </p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.b1}>
        <span className={styles.txt}>
          <p className={styles.p}>30/11/2024         </p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.d02h20m}>12d 02h 20m 48s LEFT</b>
      <b className={styles.usdt}>0.009122 USDT</b>
      <img className={styles.mutliplediscIcon} alt="" src={images.MutlipleDisc.src} />
      <img className={styles.discIcon} alt="" src={images.Disc.src} />
      <div className={styles.full} />
      <div className={styles.full80} />
      <img className={styles.calenderIcon} alt="" src={images.calender.src} />
      <img className={styles.calenderIcon1} alt="" src={images.calender.src}/>
      <img className={styles.clockIcon} alt="" src={images.clock.src} />
      <img className={styles.clockIcon1} alt="" src={images.clock.src} />
      <img className={styles.timerIcon} alt="" src={images.Timer.src.src} />
      <div className={styles.nftimagerec} />
      <div className={styles.stakeimagerec} />
      <img className={styles.nftimageIcon} alt="" src={images.NftImage.src} />
      <img className={styles.stakeimageIcon} alt="" src={images.StakeImage.src} />
      <div className={styles.nfttextrec} />
      <div className={styles.staketextrec} />
      <div className={styles.rectangleDiv}/>
      <b className={styles.nft}>NFT</b>
      <b className={styles.stake}>STAKE</b>
    </div>
  );
};

export default HOMEPAGE;