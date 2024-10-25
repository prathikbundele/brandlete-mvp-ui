import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext'; // Import UserContext
import {sportsData} from '../../../dataConfig/DataConfig'
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import BrandScore from '../BrandScore/BrandScore';
import Performance from '../Performance/Performance';
import Highlights from '../Highlights/Highlights';
import  './Dashboard.css';

function Dashboard() {
  const { userDetails } = useContext(UserContext); // Access user details from context
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility
  const [user, setUser] = useState(null); // State to store user details
  const [error, setError] = useState(''); // State to handle any errors
  const navigate = useNavigate();

  useEffect(() => {
    //fetchUserDetails();
  }, []);

  const handleCompleteProfile = () => {
    navigate('/profile');
  };

  const fetchUserDetails = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email')

      // Make the API call to fetch user details
      const response = await axios.get(`http://localhost:3000/api/user?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      // Set the user details in the state
      setUser(response.data);
    } catch (error) {
      // Handle error cases
      if (error.response) {
        setError(error.response.data.error || 'Failed to fetch user details');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };


  return (
    <div className='dashboard'>
       {/* Full-Width Popup */}
       {showPopup && (
        <div className="popup">
          <p>Your profile is incomplete. Please complete your profile to get the full experience.</p>
          <div>
            <button className="complete-profile-btn" onClick={handleCompleteProfile}>
              Complete Profile
            </button>
            <button className="close-popup-btn" onClick={() => setShowPopup(false)}>
              x
            </button>
          </div>
        </div>
      )}
      {userDetails  && (
        <div class="row">
        <div className='left-section'>
          <ProfileCard user={userDetails} />
        </div>
        <div className='main-section'>
          <BrandScore />
          <Performance />
        </div>
        <div className='right-section'>
          <Highlights />
        </div>
      </div>
      )}
      
    </div>
  );
}

export default Dashboard;
