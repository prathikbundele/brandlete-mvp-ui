import React, {useState, useContext} from "react";
import { UserContext } from '../../../context/UserContext';
import { universityData } from "../../../dataConfig/DataConfig";

import './AcademicProfile.css'

const AcademicProfile = () => {
  const { userDetails, updateUserDetails } = useContext(UserContext); 
  const [isEditing, setIsEditing] = useState(false);
  const [formDetails, setFormDetails] = useState({
    academicDetails : {
      gpa:  userDetails?.academicDetails?.gpa || '',
      testScore:  userDetails?.academicDetails?.testScore || '',
      scoreCategory : userDetails?.academicDetails?.scoreCategory ||  ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      academicDetails : {
        ...formDetails.academicDetails,
        [name]: value,
      }
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    updateUserDetails(formDetails); 
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Academic Details</h2>
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
        <div className='info'>
          <div className='field'>
            <label>GPA:</label>
            {isEditing ? (
              <input
                type="number"
                name="gpa"
                value={formDetails.academicDetails.gpa}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.academicDetails.gpa}</p>
            )}
          </div>

          <div className='field'>
            <label>Score Category:</label>
                {isEditing ? (
                    <select
                    name="scoreCategory"
                    value={formDetails.academicDetails.scoreCategory}
                    onChange={handleInputChange}
                    >
                    <option value="SAT">SAT</option>
                    <option value="ACT">ACT</option>
                    </select>
                ) : (
                    <p>{formDetails.academicDetails.scoreCategory}</p>
                )}
          </div>

          <div className='field'>
            <label>Test Score:</label>
            {isEditing ? (
              <input
                type="number"
                name="testScore"
                value={formDetails.academicDetails.testScore}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formDetails.academicDetails.testScore}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProfile