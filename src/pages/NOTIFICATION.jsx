import { FunctionComponent } from 'react';
import styles from '../css_modules/NOTIFICATION.module.css';
import {images} from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"

const NOTIFICATION = () => {
  	return (
    		<div className={styles.notification6}>
      			<div className={styles.profilerectangle} />
      			
      			<img className={styles.userlogoIcon} alt="" src={images.UserLogo} />
      			<b className={styles.wxyz}>WXYZ</b>
      			
      			<img className={styles.useropenicon} alt="" src={images.UserOpenIcon} />
				  <div className={styles.walletButton}>
        <ConnectButton />
      </div>
				<img className={styles.notificationrectangle} alt="" src={images.NotificationRectangle}  />
      	
      			<b className={styles.notifications}>NOTIFICATIONS</b>
      			<img className={styles.notificationtexticon} alt="" src={images.NotificationTextIcon}  />

				
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
          					<p className={styles.newIcoLaunches}>{`New ICO Launch Alert: Explore the latest `}</p>
          					<p className={styles.newIcoLaunches}>opportunity in the crypto world today!</p>
        				</span>
      			</div>
      			<div className={styles.newIcoLaunchContainer2}>
        				<span className={styles.newIcoLaunchesContainer1}>
          					<p className={styles.newIcoLaunches}>{`New ICO Launch Alert: Explore the latest `}</p>
          					<p className={styles.newIcoLaunches}>opportunity in the crypto world today!</p>
        				</span>
      			</div>
      			<div className={styles.alertStayUpdated}>Alert: Stay updated with the latest system messages and notifications!</div>
      			<b className={styles.generalAlertsAndContainer}>
        				<span className={styles.newIcoLaunchesContainer1}>
          					<p className={styles.newIcoLaunches}>General alerts and system msg</p>
          					<p className={styles.newIcoLaunches}>&nbsp;</p>
        				</span>
      			</b>


      			<div className={styles.updateAlertCheck}>Update Alert: Check out the latest progress on your ICOs now!</div>
      			<div className={styles.updateAlertCheck1}>Update Alert: Check out the latest progress on your ICOs now!</div>
      			<div className={styles.updateAlertCheck2}>Update Alert: Check out the latest progress on your ICOs now!</div>
      			<img className={styles.newicolaunchicon} alt="" src={images.NewIcoLaunchIcon}  />
      			<img className={styles.newicolaunchicon} alt="" src={images.NewIcoLaunchIcon} />
      			<img className={styles.updatesicon} alt="" src={images.UpdatesIcon}  />
      			<img className={styles.updatesicon1} alt="" src={images.UpdatesIcon} />
      			<img className={styles.updatesicon2} alt="" src={images.UpdatesIcon}  />
      			<img className={styles.alerticon} alt="" src={images.AlertIcon}  />
      			<img className={styles.downnotificationIcon} alt="" src={images.DownNotification}  />
				<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground}  />
      	
      			
      			<img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons}  />
    		</div>);
};

export default NOTIFICATION;
