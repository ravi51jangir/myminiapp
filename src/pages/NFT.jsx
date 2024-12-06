"use client";

import styles from '../css_modules/NFT.module.css';
import { images } from '../StoreImages/StoreImages';

import { useRouter } from 'next/navigation';


const NFT = () => {
    const router = useRouter();

return (
    <div className={styles.nft7}>
          <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground.src}  />
          
          <img className={styles.cursorBendIcon} alt="" src={images.cursorbend.src} />
          <div className={styles.cursorButton} />
          <img className={styles.nftimageboxIcon} alt="" src={images.NftImageBox.src} />
          <img className={styles.nftboxBack2Icon} alt="" src={images.nftboxback2.src} />
          <img className={styles.nftboxBack1Icon} alt="" src={images.nftboxback1.src}/>
          <div className={styles.nft7Child} />
          <div className={styles.nft7Item} />
          <b className={styles.discoverExclusive}>{`Discover exclusive `}</b>
          <b className={styles.nfts}>NFTs!</b>
          <img className={styles.comingSoonIcon} alt="" src={images.ComingSoon.src}  />
    </div>);
};

export default NFT;
