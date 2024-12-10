import React, {useState} from 'react';
import './LandingPage.css';
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'



function LandingPage() {
    const [activeComponent, setActiveComponent] = useState("login");

  const switchToRegister = () => setActiveComponent("register");
  const switchToLogin = () => setActiveComponent("login");

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          {activeComponent === "login" ? (
            <Login onSwitch={switchToRegister} />
          ) : (
            <Register onSwitch={switchToLogin} />
          )}
        </div>
      </div>
    </div>
  );
  }
  
export default LandingPage;