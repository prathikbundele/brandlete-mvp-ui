import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../utils/api";

// Create UserContext
export const UserContext = createContext();

// Create UserProvider component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); 


  // Fetch user details on mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail && token) {
          const response = await api.get(`/api/user?email=${storedEmail}`,{
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
          setUserDetails(response.data);
        }
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, [token, email]);

  // Function to update user details
  const updateUserDetails = async (updatedDetails) => {

    console.log("update called")
    try {
      const token = localStorage.getItem('token');
      const storedEmail = localStorage.getItem('email'); 
      const response = await api.put('/api/user', {...updatedDetails, email : storedEmail}, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        ...updatedDetails,
      }));
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
