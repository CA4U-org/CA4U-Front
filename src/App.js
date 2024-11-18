import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import ClubDetailPage from './page/ClubDetailPage';
import PostDetailPage from './page/PostDetailPage';
import ClubVerificationPage from './page/ClubVerificationPage';
import { MobileFrameWrapper } from './MobileFrameWrapper';
import './shared/css/hideScrollbar.css';
import { MyPage } from './page/my/MyPage';
import CategoryPage from './page/CategoryPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';
import { UserRegistrationPage } from './page/user-registration/UserRegistrationPage';
import { FavoritesPage } from './page/FavoritesPage';

function App() {
  return (
    <MobileFrameWrapper>
      <Router>
        <Routes>
          {/*검색 결과 페이지 */}
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />
          {/* App.jsx에 추가할 라우트*/}
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
          <Route path="/register" element={<UserRegistrationPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </MobileFrameWrapper>
  );
}

export default App;
