import React, {useState, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; // Import the UserContext
import SideNav from '../../components/SideNav/SideNav';
import PersonalProfile from '../../components/Profile/PersonalProfile/PersonalProfile';
import AcademicProfile from '../../components/Profile/AcademicProfile/AcademicProfile';
import AtheleticProfile from '../../components/Profile/AtheleticProfile/AtheleticProfile';
import SocialProfile from '../../components/Profile/SocialProfile/SocialProfile'
import LinkTree from '../../components/Profile/LinkTree/LinkTree'
import './ProfilePage.css';

function ProfilePage() {
  const { userDetails } = useContext(UserContext); // Access userDetails from context
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalProfile />;
      case 'academic':
        return <AcademicProfile />;
      case 'atheletic':
        return <AtheleticProfile />;
      case 'social':
        return <SocialProfile />;
      case 'linkTree':
        return <LinkTree />;
      default:
        return <PersonalProfile />;
    }
  };
  return (
    <div className='layout'>
      <div className='sidenav'>
         <SideNav onNavClick={setActiveSection}/>
      </div>
      <div className='content'>
        {/* <Outlet /> */}
        {/* <h1>Welcome {userDetails.firstName} {userDetails.lastName}</h1> Display user's name */}
        {renderContent()}
      </div>
    </div>
  );
}

export default ProfilePage;
