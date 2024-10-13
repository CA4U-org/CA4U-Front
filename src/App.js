import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ClubDetailPage from './ClubDetailPage';
import PostDetailPage from './PostDetailPage';
import ClubVerificationPage from './ClubVerificationPage';
import { MobileFrameWrapper } from './MobileFrameWrapper';
import './shared/css/hideScrollbar.css';

function App() {
  return (
    <MobileFrameWrapper>
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 동아리 상세 페이지 */}
          <Route path="/club/:clubId" element={<ClubDetailPage />} />

          {/* 게시글 상세 페이지 */}
          <Route
            path="/club/:clubId/post/:postId"
            element={<PostDetailPage />}
          />

          {/* 동아리 소속 인증 페이지 */}
          <Route path="/verification" element={<ClubVerificationPage />} />
        </Routes>
      </Router>
    </MobileFrameWrapper>
  );
}

export default App;
