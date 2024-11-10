import React, {useState, useEffect, useContext} from "react";
import { UserContext } from '../../../context/UserContext';
import {sportData} from '../../../dataConfig/DataConfig'
import './AtheleticProfile.css'

const AtheleticProfile = () => {
  const { userDetails, updateUserDetails } = useContext(UserContext); 
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    sportName: 'Soccer',
    position: '',
  });
  const [formDetails, setFormDetails] = useState({
    athleticDetails : {
      sport: userDetails?.athleticDetails?.sport || 'Soccer',
      position: userDetails?.athleticDetails?.position || '',
      metrics: userDetails?.athleticDetails?.metrics || [] 
    }
  });
  const [positions, setPositions] = useState([])
  const [metrics, setMetrics] = useState([])

  useEffect(() => {

    const sportInfo = sportData.find(s => s.sportname === formDetails.athleticDetails.sport);
    if (sportInfo) {
      setPositions(sportInfo.positions); 
      setMetrics([]); 
      if (formDetails.athleticDetails.position) {
        const relevantMetrics = sportInfo?.metrics?.filter(metric =>
          metric.positions.includes(formDetails.athleticDetails.position)
        );
        setMetrics(relevantMetrics);
      }
    }
  }, [formDetails.athleticDetails.sport, formDetails.athleticDetails.position]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      athleticDetails : {
        ...formDetails.athleticDetails,
        [name]: value,
      }
    });
  };

  // Handle change in metric values
  // const handleMetricChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormDetails({
  //     ...formDetails,
  //     athleticDetails : {
  //       ...formDetails.athleticDetails,
  //       metrics : [
  //         ...formDetails.athleticDetails.metrics,
  //         {name : name, value : value},
  //       ]
  //     }
  //   });
  // };

  const handleMetricChange = (e) => {
    const { name, value } = e.target;
  
    setFormDetails((prevDetails) => {
      const existingMetrics = prevDetails.athleticDetails?.metrics;
      const metricIndex = existingMetrics?.findIndex(metric => metric.name === name);
  
      let updatedMetrics;
  
      if (metricIndex !== -1) {
        updatedMetrics = existingMetrics?.map((metric, index) =>
          index === metricIndex ? { ...metric, value: value } : metric
        );
      } else {
        updatedMetrics = [...existingMetrics, { name: name, value: value }];
      }
  
      return {
        ...prevDetails,
        athleticDetails: {
          ...prevDetails.athleticDetails,
          metrics: updatedMetrics,
        },
      };
    });
  };
  

  const getMetricValue = (code) => {
    return formDetails.athleticDetails?.metrics?.find(m => m.name == code)?.value || ''
  }

  const setMetricValue = () => {
     
  }

  const handleSave = () => {
    setIsEditing(false);
    updateUserDetails(formDetails); 
 
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Atheletic Details</h2>
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
          {/* Sport Selection */}
          <div className='field'>
            <label>Sport Name:</label>
            {isEditing ? (
              <select
                name="sport"
                value={formDetails.athleticDetails.sport}
                onChange={handleInputChange}
              >
                {sportData.map((sport) => (
                  <option key={sport.sportname} value={sport.sportname}>
                    {sport.sportname}
                  </option>
                ))}
              </select>
            ) : (
              <p>{formDetails.athleticDetails.sport}</p>
            )}
          </div>

          {/* Position Selection */}
          <div className='field'>
            <label>Position:</label>
            {isEditing ? (
              <select
                name="position"
                value={formDetails.athleticDetails.position}
                onChange={handleInputChange}
              >
                <option value="">Select Position</option>
                {positions.map((position) => (
                  <option key={position.code} value={position.value}>
                    {position.value}
                  </option>
                ))}
              </select>
            ) : (
              <p>{formDetails.athleticDetails.position}</p>
            )}
          </div>

          {/* Dynamic Metrics based on Sport and Position */}
          {metrics?.length > 0 && (
            <div className='metrics'>
              <h3>Game Metrics</h3>
              {metrics?.map((metric, index) => (
                <div className='field' key={metric.code}>
                  <label>{metric.value}:</label>
                  {isEditing ? (
                    <input 
                      type="number"
                      name={metric.code}
                      value={getMetricValue(metric.code)}
                      onChange={handleMetricChange}
                    />
                  ) : (
                    <p>{getMetricValue(metric.code)|| 'N/A'}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AtheleticProfile