"use client";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  useBackButton,
  useClosingBehavior,
  useViewport,
} from "@telegram-apps/sdk-react";
import Homepage from "../pages/HOMEPAGE";
import Homepage2 from "../pages/HOMEPAGE_2";
import Homepage3 from "../pages/HOMEPAGE_3";
import Nftpage from "../pages/NFT";
import Stackpage from "../pages/Stack";
import Notificationpage from "../pages/NOTIFICATION";
import ICO_3page from "../pages/ICO_3";
import { images } from "../StoreImages/StoreImages";
import "../css_modules/HOMEPAGE.module.css";

export const routes = {
  home: "/",
  home2: "/home2",
  home3: "/home3",
  nft: "/nft",
  stack: "/stack",
  notification: "/notification",
  ico: "/ico",
};

// Navigation behavior hook
const useNavigationBehavior = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bb = useBackButton();
  const close = useClosingBehavior();
  const viewport = useViewport();

  useEffect(() => {
    function goBack() {
      navigate(-1);
    }

    if (close) {
      close.enableConfirmation();
    }

    if (viewport) {
      viewport.expand();
    }

    if (bb) {
      if (location.pathname === "/") {
        bb.hide();
      } else {
        bb.show();
        bb.on("click", goBack);
      }
    }

    // Cleanup function
    return () => {
      if (bb) {
        bb.off("click", goBack);
      }
    };
  }, [bb, navigate, location.pathname, close, viewport]);
};

// Navigation handler component for footer buttons
const NavigationHandler = () => {
  const navigate = useNavigate();
  useNavigationBehavior(); // Apply navigation behavior

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <img
        className="homeButtonIcon"
        src={images.HomeButton}
        alt="Home"
        onClick={() => handleNavigation(routes.home)}
        style={{ cursor: "pointer" }}
      />
      <img
        className="icoButtonIcon"
        src={images.ICOButton}
        alt="ICO"
        onClick={() => handleNavigation(routes.ico)}
        style={{ cursor: "pointer" }}
      />
      <img
        className="nftButtonIcon"
        src={images.NFTButton}
        alt="NFT"
        onClick={() => handleNavigation(routes.nft)}
        style={{ cursor: "pointer" }}
      />
      <img
        className="stackButtonIcon"
        src={images.StackButton}
        alt="Stack"
        onClick={() => handleNavigation(routes.stack)}
        style={{ cursor: "pointer" }}
      />
      <img
        className="notificationButtonIcon"
        src={images.NotificationButton}
        alt="Notifications"
        onClick={() => handleNavigation(routes.notification)}
        style={{ cursor: "pointer" }}
      />
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home2" element={<Homepage2 />} />
        <Route path="/home3" element={<Homepage3 />} />
        <Route path={routes.nft} element={<Nftpage />} />
        <Route path={routes.stack} element={<Stackpage />} />
        <Route path={routes.notification} element={<Notificationpage />} />
        <Route path={routes.ico} element={<ICO_3page />} />
      </Routes>
      <NavigationHandler />
    </Router>
  );
};

export default App;
