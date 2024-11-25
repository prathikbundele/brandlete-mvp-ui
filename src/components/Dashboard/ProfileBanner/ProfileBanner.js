import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext'; 
import profilePic from '../../../assets/profile-pic.png';
import './ProfileBanner.css'

function ProfileBanner({user}) {
  const { userDetails } = useContext(UserContext); // Access user details from context

  return (
    <div className="banner">
      {/* First row: Picture, Name, and Score */}
      <div className="firstRow" >
        <div className="leftSection" >
          <div className='dashboardWidget-avatarWrap'>
              {user.firstName && user.firstName[0] || "N/A"}{user.lastName && user.lastName[0]} 
          </div>

          <div className="name-span" >
              {user.firstName || "N/A"} {user.lastName}
          </div>
        </div>
        <div className="rightSection" >
          <span class="score-text">{userDetails.score || "N/A"}</span>
        </div>
      </div>

      {/* Second and third row: Labels and Values */}
      <div className="detailsGrid" >
        <div className="detailItem" >
            <span className="label" >brandlete Ranking</span>
            <span className="value" >NA</span>
        </div>
        <div className="detailItem" >
          <span className="label" >hometown</span>
          <span className="value" >{user.hometown}</span>
        </div>
        <div className="detailItem" >
          <span className="label" >location</span>
          <span className="value" >{user.location}</span>
        </div>
        <div className="detailItem" >
          <span className="label" >School</span>
          <span className="value" >{user.college}</span>
        </div>

        <div className="detailItem" >
          <span className="label" >Sport</span>
          <span className="value" >{user.sport}</span>
        </div>
        <div className="detailItem" >
          <span className="label" >CLASS</span>
          <span className="value" >{user.gradYear}</span>
        </div>
        <div className="detailItem" >
          <span className="label" >Birthdate</span>
          <span className="value" >{user.dob}</span>
        </div>
        <div className="detailItem" >
          <span className="label" >HT / WT</span>
          <span className="value" >{user.height}/{user.weight}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;

