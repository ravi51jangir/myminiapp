"use client";

import styles from "../css_modules/ICO_5.module.css";
import { images } from "../StoreImages/StoreImages";
import ConnectButton from "@/components/shared/ConnectButton";
import { useRouter } from "next/navigation";

const ICO_5 = () => {
  const router = useRouter();

  return (
    <div className={styles.ico5}>
      <div className={styles.profilerectangle} />
      <div className={styles.inshapepricerectangle} />
      <div className={styles.arrakispricerectangle} />
      <div className={styles.metacloudpricerectangle} />
      <div className={styles.inshapepricerectangle1} />
     

      <img className={styles.userlogoIcon} alt="" src={images.UserLogo.src} />
      <b className={styles.wxyz}>WXYZ</b>
      <div className={styles.walletButton}>
        <ConnectButton />
      </div>
      
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


      <img className={styles.useropenicon} alt="" src={images.UserOpenIcon.src} />
     
      <img className={styles.auerectangle} alt="" src={images.AUERectangle.src} />

      <div className={styles.endedrectangle} />

      <b className={styles.ended}>{`ENDED `}</b>

<b className={styles.active}  onClick={() => router.push('/ico')}
     style={{ cursor: "pointer" }}>
     ACTIVE
    </b>
    <b className={styles.upcoming}  onClick={() => router.push('/ico4')}
 style={{ cursor: "pointer" }}>
 UPCOMING
        </b>


      <img className={styles.endedicon} alt="" src={images.EndedIcon.src} />
      <div className={styles.auerectangleborder} />
      <div className={styles.auerectanglestatus} />

      <div className={styles.usdt}>$1,280 USDT</div>
      <div className={styles.usdt1}>$1,000 USDT</div>
      <div className={styles.usdt2}>$900 USDT</div>
      <div className={styles.usdt3}>$900 USDT</div>

      <div className={styles.inshape}>inSHAPE</div>
      <div className={styles.arrakis}>Arrakis</div>
      <div className={styles.metacloud}>MetaCloud</div>
      <div className={styles.inshape1}>inSHAPE</div>

      <div className={styles.blockchainService}>Blockchain Service</div>
      <div className={styles.protocol}>Protocol</div>
      <div className={styles.vr}>VR</div>
      <div className={styles.blockchainService1}>Blockchain Service</div>

      <div className={styles.usdt4}>7,000 / 20,000 USDT</div>
      <div className={styles.usdt5}>4,000 / 20,000 USDT</div>
      <div className={styles.usdt6}>9,000 / 20,000 USDT</div>
      <div className={styles.usdt7}>4,000 / 20,000 USDT</div>

      <div className={styles.progress}>30% PROGRESS</div>
      <div className={styles.progress1}>10% PROGRESS</div>
      <div className={styles.progress2}>45% PROGRESS</div>
      <div className={styles.progress3}>45% PROGRESS</div>

      <div className={styles.notRated}>Not Rated</div>
      <div className={styles.notRated1}>Not Rated</div>
      <div className={styles.notRated2}>Not Rated</div>
      <div className={styles.notRated3}>Not Rated</div>

      <div className={styles.ended15Dec}>Ended: 15 Dec</div>
      <div className={styles.ended19Dec}>Ended: 19 Dec</div>
      <div className={styles.ended25Dec}>Ended: 25 Dec</div>
      <div className={styles.ended30Dec}>Ended: 30 Dec</div>

      <div className={styles.inshapeimageborder} />
      <div className={styles.arrakisimageborder} />
      <div className={styles.metacloudimageborder} />
      <div className={styles.inshapeimageborder1} />

      <b className={styles.b}>.........................................................................</b>
      <b className={styles.b1}>.........................................................................</b>
      <b className={styles.b2}>.........................................................................</b>

      <img className={styles.inshapeimageIcon} alt="" src={images.inShapeImage.src} />
      

      <div className={styles.inshapedark} />
      <div className={styles.arrakisdark} />
      <div className={styles.metaclouddark} />
      <div className={styles.inshapedark1} />
      <div className={styles.inshape2} />
      <div className={styles.arrakis1} />
      <div className={styles.metacloud1} />
      <div className={styles.inshape3} />

      <img className={styles.arrakisimageIcon} alt="" src={images.ArrakisImage.src} />
      <img className={styles.metacloudimageIcon} alt="" src={images.MetaCloudImage.src} />
      <img className={styles.inshapeimageIcon1} alt="" src={images.inShapeImage.src} />
      <img className={styles.dropdownico5Icon} alt="" src={images.DownNotification.src} />
    </div>
  );
};

export default ICO_5;
