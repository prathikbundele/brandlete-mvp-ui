import React, {useState, useContext} from "react";
import { UserContext } from '../../../context/UserContext';
import instagramIcon from '../../../assets/instagram.png';
import twitterIcon from '../../../assets/twitter.png';
import tiktokIcon from '../../../assets/tiktok.png';
import './SocialProfile.css'

const SocialProfile = () => {
    const { userDetails, updateUserDetails } = useContext(UserContext); // Access user details and updater
    const [isEditing, setIsEditing] = useState(false);
  
    const [formDetails, setFormDetails] = useState({
      socialDetails : {
        followers:  userDetails?.socialDetails?.followers,
        engagement : userDetails?.socialDetails?.engagement
      }
    });
  
    // Handle field change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormDetails({
        ...formDetails,
        socialDetails : {
          ...formDetails.socialDetails,
          [name]: value,
        }
      });
    };
  
    // Save and toggle edit mode
    const handleSave = () => {
      setIsEditing(false);
      // Save logic here (e.g., API call)
      updateUserDetails(formDetails); // Update context and database
    };
    return(
        <div className='container'>
        <div className='header'>
          <h2>Social Details</h2>
          {isEditing ? (
            <button className='saveButton' onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className='editButton' onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>
  
        <div className='details'>
            <div style={{display : "flex"}}>
                <p>
                    <img src={instagramIcon} />
                </p>
                <p>
                    <img src={tiktokIcon} />
                </p>
                <p>
                    <img src={twitterIcon} />
                </p>
            </div>
          <div className='info'>
            <div className='field'>
              <label>Followers:</label>
              {isEditing ? (
                <input
                  type="number"
                  name="followers"
                  value={formDetails?.socialDetails?.followers}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{formDetails?.socialDetails?.followers}</p>
              )}
            </div>
            <div className='field'>
              <label>Engagement:</label>
              {isEditing ? (
                <input
                  type="number"
                  name="engagement"
                  value={formDetails?.socialDetails?.engagement}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{formDetails?.socialDetails?.engagement}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default SocialProfile