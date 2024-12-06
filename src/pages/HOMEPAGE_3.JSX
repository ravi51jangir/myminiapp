import React, { useCallback } from 'react';
import { images } from '../StoreImages/StoreImages';
import ConnectButton from "@/components/shared/ConnectButton"

const HOMEPAGE = () => {
  const onHomeButtonIconClick = useCallback(() => {
    // Add your code here
  }, []);
  
  return (
    <div className="homePage3">
      <img className="neutonimageIcon" alt="" src={images.NeutonImage} />
      <img className="neutonimagebg1Icon" alt="" src={images.NeutonImageBg1} />
      <img className="neutonimagebg2Icon" alt="" src={images.NeutonImageBg2} />
      <img className="neutonimagebg3Icon" alt="" src={images.NeutonImageBg3} />
      <img className="buttonsBackground" alt="" src={images.ButtonsBackground} />
      <img className="homeButtonIcon" alt="" src={images.HomeButton} onClick={onHomeButtonIconClick} />
      <img className="notificationButtonIcon" alt="" src={images.NotificationButton} />
      <img className="stackButtonIcon" alt="" src={images.StackButton} />
      <img className="cursorbuttonsIcon" alt="" src={images.CursorButtons} />
      <div className="listingDetails">LISTING DETAILS</div>
      <div className="bitmart">Bitmart</div>
      <div className="neuton">NEUTON</div>
      <div className="price">$12,451.8</div>
      <div className="secondPrice">$120.5</div>
      <div className="coindcx">CoinDCX</div>
      <div className="bitmartLogoellipse" />
      <div className="coindcxLogoellipse" />
      <img className="coindcxLogoIcon" alt="" src={images.CoinDCX_Logo} />
      <img className="bitmartLogoIcon" alt="" src={images.BitMart_Logo} />
      <b className="dots">.........................................................................</b>
      <b className="dots2">.........................................................................</b>
      
      <div className="buynewtonrec" />
      <img className="icoButtonIcon" alt="" src={images.ICOButton} onClick={onHomeButtonIconClick} />
      <img className="nftButtonIcon" alt="" src={images.NFTButton} onClick={onHomeButtonIconClick} />
      <div className="hardcap" />
      <div className="softcap" />
      <div className="ton600" />
      <div className="hardCap">HARD CAP</div>
      <b className="kTon">10 K TON</b>
      <img className="hardcapIcon" alt="" src={images.HardCap} />
      <div className="profilerectangle" />
      <div className="buynewtonrectangle" />
      <div className="walletButton">
        <ConnectButton />
      </div>
      
      <b className="wxyz">WXYZ</b>
      <b className="buyNeuton">BUY NEUTON</b>
      <b className="amount">600</b>
      <div className="ton">TON</div>
      
      <img className="useropenicon" alt="" src={images.UserOpenIcon} />
      <img className="userlogoIcon" alt="" src={images.UserLogo} />
      <img className="telegramIcon" alt="" src={images.Telegram} />
      <img className="twitterIcon" alt="" src={images.Twitter} />
      <img className="webIcon" alt="" src={images.Web} />
      <img className="papersIcon" alt="" src={images.Papers} />
      <img className="netonimageIcon" alt="" src={images.NetonImage} />
      <div className="homePage3Child" />
      <div className="homePage3Item" />
      <div className="homePage3Inner" />
      <div className="min10Ton">Min: 10 TON</div>
      <div className="max500Ton">Max: 500 TON</div>
      <div className="tonBalance">Ton Balance:</div>
      <div className="tonAmount">0.16333 TON</div>
      <div className="buyNeutonAmount">Buy 1,2876,321,255 NEUTON</div>
      <div className="rectangleDiv" />
      <div className="homePage3Child1" />
      <div className="softCap">SOFT CAP</div>
      <b className="kTon1">30 K TON</b>
      <img className="softcapIcon" alt="" src={images.SoftCap} />
      <div className="full" />
      <div className="full80" />
      <b className="dateTime1">
        <span className="txt">
          <p className="date">10/11/2024</p>
          <p className="time">16:30</p>
        </span>
      </b>
      <b className="dateTime2">
        <span className="txt">
          <p className="date">30/11/2024</p>
          <p className="time">16:30</p>
        </span>
      </b>
      <img className="calenderIcon" alt="" src={images.calender} />
      <img className="calenderIcon1" alt="" src={images.calender} />
      <img className="clockIcon" alt="" src={images.clock} />
      <img className="clockIcon1" alt="" src={images.clock} />
      <b className="timeLeft">12d 02h 20m 48s LEFT</b>
      <img className="timerIcon" alt="" src={images.Timer} />
    </div>
  );
};

export default HOMEPAGE;