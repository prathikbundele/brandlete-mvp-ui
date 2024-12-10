import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; // Import the UserProvider
import TopNav from "./components/TopNav/TopNav";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import './App.css';

function App() {
  return (
    <UserProvider> {/* Wrap the app in the UserProvider */}
      <Router>
        <TopNav />
        <div className="App">
        {/* <div className="app-background">
          <div className="bg-gradient-blur-wrapper">
            <div className="bg-gradient-blur-circle bg-circle-1"></div>
            <div className="bg-gradient-blur-circle bg-circle-2"></div>
            <div className="bg-gradient-blur-circle bg-circle-3"></div>
          </div> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>

        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
