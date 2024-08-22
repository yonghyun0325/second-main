import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // 메인 페이지 컴포넌트

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* 메인 페이지 경로 */}
        {/* 여기에 추가적인 라우트를 정의할 수 있습니다 */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
