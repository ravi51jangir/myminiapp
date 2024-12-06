import { FunctionComponent } from 'react';
import styles from '../css_modules/NFT.module.css';
import { images } from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"
import { useRouter } from 'next/navigation';


const NFT = () => {
    const router = useRouter();
	  
  	
  	return (
    		<div className={styles.nft7}>
      			<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground}  />
      			
      			<img className={styles.cursorBendIcon} alt="" src={images.cursorbend} />
      			<div className={styles.cursorButton} />
      			<img className={styles.nftimageboxIcon} alt="" src={images.NftImageBox} />
      			<img className={styles.nftboxBack2Icon} alt="" src={images.nftboxback2} />
      			<img className={styles.nftboxBack1Icon} alt="" src={images.nftboxback1}/>
      			<div className={styles.nft7Child} />
      			<div className={styles.nft7Item} />
      			<b className={styles.discoverExclusive}>{`Discover exclusive `}</b>
      			<b className={styles.nfts}>NFTs!</b>
      			<img className={styles.comingSoonIcon} alt="" src={images.ComingSoon}  />
    		</div>);
};

export default NFT;

