import React from "react";
import Header from "./components/Header/Header";
import AIRecommendation from "./components/AIRecommendation/AIRecommendation";
import ClubRanking from "./components/ClubRanking/ClubRanking";
import "./App.css";
import AffiliationView from "./components/AffiliationView/AffiliationView";
import StaffGuide from "./components/StaffGuide/StaffGuide";
import CategoryView from "./components/CategoryView/CategoryView";
import RecruitmentSection from "./components/RecruitmentSection/RecruitmentSection";
function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <AffiliationView />
      <StaffGuide />
      <CategoryView />
      <AIRecommendation />
      <ClubRanking />
      <RecruitmentSection />
    </div>
  );
}

export default MainPage;
