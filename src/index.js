import React from "react";
import { createRoot } from "react-dom/client";
// index.js 또는 App.js 상단에 추가
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import App from "./App";
import ImageSlider from "./components/ImageSlider";
import MainPage from "./MainPage";
import ClubDetailPage from "./ClubDetailPage";
import FavoriteButton from "./components/FavoriteButton";
import VerifiedButton from "./components/VerifiedButton";
import ClubInfo from "./components/ClubInfo";
import ClubBoardPage from "./components/ClubBoardPage";
import PostDetailPage from "./PostDetailPage";
import ClubVerificationPage from "./ClubVerificationPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
