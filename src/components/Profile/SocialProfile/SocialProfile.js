import React, {useState, useEffect, useContext} from "react";
import Select from "react-select";
import api from "../../../utils/api";
import { UserContext } from '../../../context/UserContext';
import instagramIcon from '../../../assets/instagram.png';
import twitterIcon from '../../../assets/twitter.png';
import tiktokIcon from '../../../assets/tiktok.png';
import './SocialProfile.css'

const options = [
  { value: "instagram", label: <><img src={instagramIcon} alt="Instagram" style={{ width: "20px", marginRight: "10px" }} /> Instagram</> },
  { value: "tiktok", label: <><img src={tiktokIcon} alt="TikTok" style={{ width: "20px", marginRight: "10px" }} /> TikTok</>, isDisabled: true },
  //{ value: "linkedin", label: <><img src={linkedinIcon} alt="LinkedIn" style={{ width: "20px", marginRight: "10px" }} /> LinkedIn</>, isDisabled: true },
  { value: "twitter", label: <><img src={twitterIcon} alt="Twitter" style={{ width: "20px", marginRight: "10px" }} /> Twitter</>, isDisabled: true },
];

const SocialProfile = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(''); // State to handle any errors
  const [igProfileDetails, setIgProfileDetails] = useState(null);
  const [igProfileAnalyticsDetails, setIgProfileAnalyticsDetails] = useState(null)
  const [isPrivateProfile, setIsPrivateProfile] = useState(null)
  const { userDetails, updateUserDetails } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  
    const [formDetails, setFormDetails] = useState({
      socialDetails : {
        followers:  userDetails?.socialDetails?.followers,
        engagement : userDetails?.socialDetails?.engagement
      }
    });

    useEffect(() => {
      if(igProfileDetails){
        console.log("ig details : ", igProfileDetails)
        setIsPrivateProfile((prev) => {
          const isPrivate = igProfileDetails.is_private;
          fetchProfileAnalyticsAPI(igProfileDetails.platform_username);

          return isPrivate;
        });
      }
    },[igProfileDetails])

    useEffect(() => {
      if(isPrivateProfile){
        alert("Account Private hai, Public karle")
      }
    },[isPrivateProfile])

    useEffect(() => {
      if(userDetails.socialDetails){
        setUsername(userDetails.socialDetails.socialHandle)
      }
    }, [userDetails])

    const connectInstagram = async () => {
      await fetchBasicProfileAPI();
    }

    const fetchBasicProfileAPI = async () => {
      try{
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email'); 
        const response = await api.get(`/api/social/profile?username=${username}&email=${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIgProfileDetails(response.data)
  
      }catch(error){
        if (error.response) {
          setError(error.response.data.error || 'Failed to fetch user details');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    }

    const fetchProfileAnalyticsAPI = async (username) => {
      try{
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email'); 
        const response = await api.get(`/api/social/analytics?username=${username}&email=${email}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log("rsocial response : ", response.data)
        setIgProfileAnalyticsDetails(response.data)
  
      }catch(error){
        if (error.response) {
          setError(error.response.data.error || 'Failed to fetch user details');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    }

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
  
    const handleSave = () => {
      setIsEditing(false);
      updateUserDetails(formDetails); 
    };
    return(
        <div className='container'>
        <div className='header'>
          <h2>Social Details</h2>
          {/* {isEditing ? (
            <button className='saveButton' onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className='editButton' onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )} */}
        </div>
  
        <div className='details'>
            <div className="" style={{display : "flex"}}>
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
            <div style={{display : ""}}>
              
            <Select options={options} isOptionDisabled={(option) => option.isDisabled} />;
              <div className='field'>
                  <input
                    type="String"
                    name="igHandle"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <button className='saveButton' onClick={connectInstagram}>
                    Connect
              </button>
            </div>
          { (igProfileDetails || userDetails?.socialDetails) && <div className='info'>
            <div className='field'>
              <label>Followers:</label>
                <input
                  disabled
                  type="number"
                  name="followers"
                  value={userDetails?.socialDetails?.followers}
                />
            </div>
          </div>
          }
          { (igProfileAnalyticsDetails || userDetails?.socialDetails)  && <>
             <div className='field'>
             <label>Average Likes:</label>
               <input
                 disabled
                 type="number"
                 name="average_likes"
                 value={userDetails?.socialDetails?.average_likes}
               />
              </div>
              <div className='field'>
             <label>Engagement Rate:</label>
               <input
                 disabled
                 type="number"
                 name="engagement"
                 value={userDetails?.socialDetails?.engagement}
               />
              </div>
              </>
          }
        </div>
      </div>
    )
}

export default SocialProfile