"use client";

import styles from '../css_modules/Stack.module.css';
import { images } from '../StoreImages/StoreImages';

import { useRouter } from 'next/navigation';


const Stack = () => {
    const router = useRouter();
    return (
        <div className={styles.stack9}>
                          <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground.src} />
      <img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons.src} />
      <img
        className={styles.homeButtonIcon}
        src={images.HomeButton.src}
        alt="Home"
        onClick={() => router.push('/home')}
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
             
              
              <img className={styles.cursorBendIcon} alt="" src={images.cursorbend.src} />
              <div className={styles.cursorButton} />
              <img className={styles.stackimageIcon} alt="" src={images.StackImage.src}/>
              <img className={styles.stackBack1Icon} alt="" src={images.stackback1.src} />
              <img className={styles.stackBack2Icon} alt="" src={images.stackback2.src} />
              <div className={styles.comingSoonBackRectangle} />
              <div className={styles.earnRewardsEffortlesslyContainer}>
                    <p className={styles.earnRewardsEffortlesslyWith}>
                          <span className={styles.earn}>Earn</span>
                          <span>{` rewards effortlessly with `}</span>
                    </p>
                    <p className={styles.earnRewardsEffortlesslyWith}>
                          <span>{`our upcoming `}</span>
                          <span className={styles.earn}>staking</span>
                          <span className={styles.options}> options!</span>
                    </p>
              </div>
              <img className={styles.comingSoonIcon} alt="" src={images.ComingSoon.src} />
        </div>);
};

export default Stack;