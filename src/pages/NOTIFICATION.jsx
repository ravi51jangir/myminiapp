"use client";

import styles from '../css_modules/NOTIFICATION.module.css';
import { images } from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"
import { useRouter } from 'next/navigation';

const NOTIFICATION = () => {
  const router = useRouter();

  return (
    <div className={styles.notification6}>
          <div className={styles.profilerectangle} />
          
          <img className={styles.userlogoIcon} alt="" src={images.UserLogo.src} />
          <b className={styles.wxyz}>WXYZ</b>
          
          <img className={styles.useropenicon} alt="" src={images.UserOpenIcon.src} />
          <div className={styles.walletButton}>
<ConnectButton />
</div>
        <img className={styles.notificationrectangle} alt="" src={images.NotificationRectangle.src}  />
  
          <b className={styles.notifications}>NOTIFICATIONS</b>
          <img className={styles.notificationtexticon} alt="" src={images.NotificationTextIcon.src}  />

        
          <div className={styles.newicolaunchrectangle} />
          <div className={styles.newicolaunchrectangle1} />
          <div className={styles.generalalertrectangle} />
          <div className={styles.updatesrectangle} />
          <div className={styles.updatesrectangle1} />
          <div className={styles.updatesrectangle2} />
          <div className={styles.newicolaunchsidebar} />
          <div className={styles.newicolaunchsidebar1} />
          <div className={styles.generalalertsidebar} />
          <div className={styles.updatessidebar} />
          <div className={styles.updatessidebar1} />
          <div className={styles.updatessidebar2} />
          <div className={styles.newicolaunchellipse} />
          <div className={styles.newicolaunchellipse1} />
          <div className={styles.generalalertsidebarellipse} />
          <div className={styles.updatesellipse} />
          <div className={styles.updatesellipse1} />
          <div className={styles.notification6Child} />
          <b className={styles.newIcoLaunchesContainer}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>New ICO launches</p>
                </span>
          </b>
          <b className={styles.newIcoLaunchesContainer2}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>New ICO launches</p>
                </span>
          </b>
          <b className={styles.updatesOnUserContainer}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>Updates on user ICOs</p>
                </span>
          </b>
          <b className={styles.updatesOnUserContainer2}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>Updates on user ICOs</p>
                </span>
          </b>
          <b className={styles.updatesOnUserContainer4}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>Updates on user ICOs</p>
                </span>
          </b>
          <div className={styles.newIcoLaunchContainer}>
                <span className={styles.newIcoLaunchesContainer1}>
                   
                </span>
          </div>
          <div className={styles.newIcoLaunchContainer2}>
                <span className={styles.newIcoLaunchesContainer1}>
                     
                     
                </span>
          </div>

          <b className={styles.generalAlertsAndContainer}>
                <span className={styles.newIcoLaunchesContainer1}>
                      <p className={styles.newIcoLaunches}>General alerts and msg</p>
                      <p className={styles.newIcoLaunches}>&nbsp;</p>
                </span>
          </b>


          
          <img className={styles.newicolaunchicon} alt="" src={images.NewIcoLaunchIcon.src}  />
          <img className={styles.newicolaunchicons} alt="" src={images.NewIcoLaunchIcon.src} />
          <img className={styles.updatesicon} alt="" src={images.UpdatesIcon.src}  />
          <img className={styles.updatesicon1} alt="" src={images.UpdatesIcon.src} />
          <img className={styles.updatesicon2} alt="" src={images.UpdatesIcon.src}  />
          <img className={styles.alerticon} alt="" src={images.AlertIcon.src}  />
          <img className={styles.downnotificationIcon} alt="" src={images.DownNotification.src}  />
       
  
          
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
    </div>);
};

export default NOTIFICATION;
  