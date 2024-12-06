import { FunctionComponent, useCallback } from 'react';
import styles from '../css_modules/ICO_4.module.css';
import {images} from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"
import { useRouter } from 'next/navigation';


const ICO_4 = () => {
    const router = useRouter();
  	
  	return (
    		<div className={styles.ico4}>
      			<div className={styles.profilerectangle} />
      			<div className={styles.goalrectangle} />
      			<div className={styles.goalrectangle1} />
      			<div className={styles.goalrectangle2} />
      			<div className={styles.goalrectangle3} />
      		
      			<img className={styles.userlogoIcon} alt="" src={images.UserLogo} />
      			<b className={styles.wxyz}>WXYZ</b>
      		
      			<img className={styles.useropenicon} alt="" src={images.UserOpenIcon}/>
				  <div className={styles.walletButton}>
        <ConnectButton />
      </div>
      			<div className={styles.goalNotSet}>GOAL: NOT SET</div>
      			<div className={styles.goal50000}>GOAL: $50,000</div>
      			<div className={styles.goal20000}>GOAL: $20,000</div>
      			<div className={styles.goal25000}>GOAL: $25,000</div>
      			<div className={styles.bovinverse}>BovinVerse</div>
      			<div className={styles.chirplay}>Chirplay</div>
      			<div className={styles.metacloud}>MetaCloud</div>
      			<div className={styles.inshape}>inSHAPE</div>
      			<div className={styles.plateform}>Plateform</div>
      			<div className={styles.marketplace}>Marketplace</div>
      			<div className={styles.vr}>VR</div>
      			<div className={styles.blockchainService}>Blockchain Service</div>
      			<div className={styles.usdt}>7,000 / 20,000 USDT</div>
      			<div className={styles.usdt1}>4,000 / 20,000 USDT</div>
      			<div className={styles.usdt2}>9,000 / 20,000 USDT</div>
      			<div className={styles.usdt3}>4,000 / 20,000 USDT</div>
      			<div className={styles.progress}>30% PROGRESS</div>
      			<div className={styles.progress1}>10% PROGRESS</div>
      			<div className={styles.progress2}>45% PROGRESS</div>
      			<div className={styles.progress3}>45% PROGRESS</div>
      			<div className={styles.notRated}>Not Rated</div>
      			<div className={styles.notRated1}>Not Rated</div>
      			<div className={styles.notRated2}>Not Rated</div>
      			<div className={styles.notRated3}>Not Rated</div>
      			<div className={styles.dec}>1 Dec</div>
      			<div className={styles.dec1}>8 Dec</div>
      			<div className={styles.dec2}>11 Dec</div>
      			<div className={styles.dec3}>19 Dec</div>
      			<div className={styles.bovinverseimageborder} />
      			<div className={styles.chirplayimageborder} />
      			<div className={styles.metacloudimageborder} />
      			<div className={styles.inshapeimageborder} />
      			<b className={styles.b}>.........................................................................</b>
      			<b className={styles.b1}>.........................................................................</b>
      			<b className={styles.b2}>.........................................................................</b>
      			<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground}  />
      			<img className={styles.homeButtonIcon} alt="" src={images.HomeButton} onClick={onHomeButtonIconClick} />
      			<img className={styles.notificationButtonIcon} alt="" src={images.NotificationButton} />
      			<img className={styles.stackButtonIcon} alt="" src={images.StackButton} />
      			<img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons} />
      			<img className={styles.icoButtonIcon} alt="" src={images.ICOButton} />
      			<img className={styles.nftButtonIcon} alt="" src={images.NFTButton} onClick={onHomeButtonIconClick} />
      			<div className={styles.bovinversedark} />
      			<div className={styles.chirplaydark} />
      			<div className={styles.metaclouddark} />
      			<div className={styles.inshapedark} />
      			<div className={styles.bovinverse1} />
      			<div className={styles.chirplay1} />
      			<div className={styles.metacloud1} />
      			<div className={styles.inshape1} />
      			<img className={styles.metacloudimageIcon} alt="" src={images.MetaCloudImage} />
      			<img className={styles.inshapeimageIcon} alt="" src={images.inShapeImage} />
      			{/* <img className={styles.dropdownico4Icon} alt="" src="DropDownIco_4.svg" /> */}
      			<img className={styles.auerectangle} alt="" src={images.AUERectangle}  />
      			<div className={styles.upcomingrectangle} />
      			<b className={styles.active}>{`ACTIVE `}</b>
      			<b className={styles.upcoming}>UPCOMING</b>
      			<b className={styles.ended} onClick={onHomeButtonIconClick}>ENDED</b>
      			<img className={styles.upcomingicon} alt="" src={images.UpcomingIcon} />
      			<div className={styles.auerectangleborder} />
      			<div className={styles.auerectanglestatus} />
      			<img className={styles.bovinverseimageIcon} alt="" src={images.BovinVerseImage} />
      			<img className={styles.chirplayimageIcon} alt="" src={images.ChirplayImage} />
    		</div>);
};

export default ICO_4;
