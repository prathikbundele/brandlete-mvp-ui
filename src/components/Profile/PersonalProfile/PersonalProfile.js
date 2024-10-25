import React, {useState, useContext} from "react";
import { UserContext } from '../../../context/UserContext';
import {universityData } from '../../../dataConfig/DataConfig'
import './PersonalProfile.css';

const PersonalProfile = () => {
  const { userDetails, updateUserDetails } = useContext(UserContext); // Access user details and updater
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    about : "",
    firstName: 'John',
    lastName: 'Doe',
    hometown : "",
    currentLocation : "",
    institution : "",
    dob : "",
    height : "",
    weight : "",
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  const [formDetails, setFormDetails] = useState(userDetails)

  // Handle field change
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  // Handle field change update to context
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save and toggle edit mode
  const handleSave = () => {
    setIsEditing(false);
    // Save logic here (e.g., API call)

    updateUserDetails(formDetails); // Update context and database
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Personal Details</h2>
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
        <div className='profilePicture field'>
          <img src={formDetails.profilePicture} alt="Profile" className='image' />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              className='fileInput'
              onChange={handleProfilePictureChange}
            />
          )}
        </div>

        <div className='info'>
          <div className='field'>
              <label>About:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="about"
                  value={formDetails.firstName}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{formDetails.firstName}</p>
              )}
            </div>
          <div className='field'>
            <label>First Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.firstName}</p>
            )}
          </div>

          <div className='field'>
            <label>Last Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.lastName}</p>
            )}
          </div>

          <div className='field'>
            <label>Home Town:</label>
            {isEditing ? (
              <input
                type="text"
                name="hometown"
                value={formDetails.hometown}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.hometown}</p>
            )}
          </div>

          <div className='field'>
            <label>Current Location:</label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={formDetails.location}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.location}</p>
            )}
          </div>

          <div className='field'>
            <label>College / School Name:</label>
            {isEditing ? (
              // <input
              //   type="text"
              //   name="college"
              //   value={formDetails.college}
              //   onChange={handleInputChange}
              // />
              <select
                    name="college"
                    value={formDetails.college}
                    onChange={handleInputChange}
                    >
                      {universityData.map((item, index) => (
                        <option value={item.name}>{item.name}</option>
                      ))
                      }
                    </select>
            ) : (
              <p>{formDetails.college}</p>
            )}
          </div>

          <div className='field'>
            <label>Expected Year of Graduation:</label>
            {isEditing ? (
              <input
                type="number"
                name="gradYear"
                value={formDetails.gradYear}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.gradYear}</p>
            )}
          </div>

          <div className='field'>
            <label>Date Of Birth:</label>
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={formDetails.dob}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.dob}</p>
            )}
          </div>

          <div className='field'>
            <label>Height:</label>
            {isEditing ? (
              <input
                type="text"
                name="height"
                value={formDetails.height}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.height}</p>
            )}
          </div>

          <div className='field'>
            <label>Weight:</label>
            {isEditing ? (
              <input
                type="text"
                name="weight"
                value={formDetails.weight}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.weight}</p>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;