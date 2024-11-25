import React, {useState, useEffect, useContext} from "react";
import { UserContext } from '../../../context/UserContext'; // Import UserContext
import { sportData } from "../../../dataConfig/DataConfig";

import './Performance.css'

const Performance = () => {
    const { userDetails } = useContext(UserContext); // Access user details from context

    return(
        <>
            <div className='brandScoreSection'>
                <label className='section-header'>PERFORMANCE</label>
                <div className="stats-container">
                    <div className="stats-section">
                        <div className="section-header">Atheletic Performance</div>
                        <div className="scores-row">
                            {sportData.find(item => item.sportname == userDetails.sport)?.metrics?.filter(item => item.positions.includes(userDetails?.athleticDetails?.position)).map((metric, index) => (
                                <div className="point-section">
                                <label className="point-label">{metric.initial}</label>
                                <label className="point-value">{userDetails?.athleticDetails?.metrics?.find(item => item.name == metric.code).value}</label>
                             </div>
                            ) )}
                        </div>
                    </div>
                    <div className="stats-section">
                        <div className="section-header">Academic Performance</div>
                            <div className="scores-row">
                                <div className="point-section">
                                   <label className="point-label">GPA</label>
                                   <label className="point-value">{userDetails.academicDetails?.gpa}</label>
                                </div>
                            </div>
                    </div>
                    <div className="stats-section">
                        <div className="section-header">Social Performance</div>
                        <div className="scores-row">
                                <div className="point-section">
                                   <label className="point-label">Total Followers</label>
                                   <label className="point-value">{userDetails?.socialDetails?.followers}</label>
                                </div>
                                <div className="point-section">
                                    <label className="point-label">Engagement %</label>
                                    <label className="point-value">{userDetails?.socialDetails?.engagement}</label>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Performance;