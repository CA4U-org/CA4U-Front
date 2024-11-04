import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ClubDetailPage from './ClubDetailPage';
import PostDetailPage from './PostDetailPage';
import ClubVerificationPage from './ClubVerificationPage';
import { MobileFrameWrapper } from './MobileFrameWrapper';
import './shared/css/hideScrollbar.css';
import { MyPage } from './page/MyPage';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ProtectedRoute from './components/ProtectedRoute';
import CategoryPage from './CategoryPage';
import SearchPage from './SearchPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';

function App() {
  return (
    <MobileFrameWrapper>
      <Router>
        <Routes>
          {/* 인증 관련 라우트 */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />
          {/* App.jsx에 추가할 라우트*/}
          <Route path="/search" element={<SearchPage />} />
          {/* 동아리 상세 페이지 */}
          <Route path="/club/:clubId" element={<ClubDetailPage />} />
          {/* 게시글 상세 페이지 */}
          <Route
            path="/club/:clubId/post/:postId"
            element={<PostDetailPage />}
          />
          {/* 동아리 소속 인증 페이지 */}
          <Route path="/verification" element={<ClubVerificationPage />} />
          {/* App.jsx에 추가할 라우트 설정 // 기존 App.jsx의 Routes 내부에 추가*/}
          <Route path="/oauth/redirect" element={<OAuth2RedirectHandler />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          {/* 마이페이지 */}
          <Route path="/my" element={<MyPage />} />
        </Routes>
      </Router>
    </MobileFrameWrapper>
  );
}

export default App;
