"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useBackButton, useClosingBehavior, useViewport } from "@telegram-apps/sdk-react";
import Homepage from "../pages/HOMEPAGE";
// import Homepage2 from "./pages/HOMEPAGE_2";
// import Homepage3 from "./pages/HOMEPAGE_3";
// import Nftpage from "./pages/NFT";
// import Stackpage from "./pages/Stack";
// import Notificationpage from "./pages/NOTIFICATION";
// import ICO_3page from "./pages/ICO_3";
import { images } from "../StoreImages/StoreImages";
import styles from "../css_modules/HOMEPAGE.module.css";

const NavigationFooter = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer>
      <img 
        className={styles.homeButtonIcon}
        src={images.HomeButton}
        alt="Home"
        onClick={() => handleNavigation("/")}
        style={{ cursor: "pointer" }}
      />
      {/* <img 
        className={styles.icoButtonIcon}
        src={images.ICOButton}
        alt="ICO"
        onClick={() => handleNavigation("/ico")}
        style={{ cursor: "pointer" }}
      />
      <img 
        className={styles.nftButtonIcon}
        src={images.NFTButton}
        alt="NFT"
        onClick={() => handleNavigation("/nft")}
        style={{ cursor: "pointer" }}
      />
      <img 
        className={styles.stackButtonIcon}
        src={images.StackButton}
        alt="Stack"
        onClick={() => handleNavigation("/stack")}
        style={{ cursor: "pointer" }}
      />
      <img 
        className={styles.notificationButtonIcon}
        src={images.NotificationButton}
        alt="Notifications"
        onClick={() => handleNavigation("/notification")}
        style={{ cursor: "pointer" }}
      /> */}
    </footer>
  );
};

const App = ({ children }) => {
  const bb = useBackButton();
  const close = useClosingBehavior();
  const viewport = useViewport();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function goBack() {
      router.back();
    }

    if (close) {
      close.enableConfirmation();
    }

    if (viewport) {
      viewport.expand();
    }

    if (bb) {
      if (pathname === "/") {
        bb.hide();
        return;
      }
      bb.show();
      bb.on("click", goBack);
    }
  }, [bb, router, pathname, close, viewport]);

  return (
    <main className="bg-background">
      {/* {children} */}
      <Homepage/>
      {/* <NavigationFooter /> */}
    </main>
  );
};

export default App;