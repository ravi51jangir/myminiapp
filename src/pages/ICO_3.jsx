"use client";

import styles from "../css_modules/ICO.module.css";
import { images } from "../StoreImages/StoreImages";
import ConnectButton from "@/components/shared/ConnectButton";
import { useRouter } from "next/navigation";

const ICO = () => {
  const router = useRouter();



  return (
    <div className={styles.ico3}>
      <div className={styles.profilerectangle} />
      <div className={styles.pricerectangle} />
      <div className={styles.pricerectangle1} />
      <div className={styles.pricerectangle2} />
      <div className={styles.pricerectangle3} />

      <img className={styles.userlogoIcon} alt="" src={images.UserLogo.src} />
      <b className={styles.wxyz}>WXYZ</b>

      <img className={styles.useropenicon} alt="" src={images.UserOpenIcon.src} />
      <div className={styles.walletButton}>
        <ConnectButton />
      </div>
      <img
        className={styles.auerectangle}
        alt=""
        src={images.AUERectangle.src}
      />
      <div className={styles.activerectangle} />
 
      <b className={styles.active}>{`ACTIVE `}</b>
      <b className={styles.upcoming}  onClick={() => router.push('/ico4')}
        style={{ cursor: "pointer" }}>
        UPCOMING
      </b>
      <b className={styles.ended}  onClick={() => router.push('/ico5')}
        style={{ cursor: "pointer" }}>
        ENDED
      </b>
      <img className={styles.activeicon} alt="" src={images.ActiveIcon.src} />
      <div className={styles.auerectanglestatus} />
      <div className={styles.auerectangleborder} />
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
      <div className={styles.dLeft}>9d left</div>
      <div className={styles.dLeft1}>11d left</div>
      <div className={styles.dLeft2}>19d left</div>
      <div className={styles.dLeft3}>19d left</div>
      <div className={styles.inshapeimageborder} />
      <div className={styles.arrakisimageborder} />
      <div className={styles.metacloudimageborder} />
      <div className={styles.inshapeimageborder1} />
      <b className={styles.b}>
        .........................................................................
      </b>
      <b className={styles.b1}>
        .........................................................................
      </b>
      <b className={styles.b2}>
        .........................................................................
      </b>
      <img
        className={styles.inshapeimageIcon}
        alt=""
        src={images.inShapeImage.src}
      />
<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground.src} />
      <div className={styles.inshapedark} />
      <div className={styles.arrakisdark} />
      <div className={styles.metaclouddark} />
      <div className={styles.inshapedark1} />
      <div className={styles.inshape2} />
      <div className={styles.arrakis1} />
      <div className={styles.metacloud1} />
      <div className={styles.inshape3} />
      <img
        className={styles.arrakisimageIcon}
        alt=""
        src={images.ArrakisImage.src}
      />
      <img
        className={styles.metacloudimageIcon}
        alt=""
        src={images.MetaCloudImage.src}
      />
      <img
        className={styles.inshapeimageIcon1}
        alt=""
        src={images.inShapeImage.src}
      />

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

    </div>
  );
};

export default ICO;
