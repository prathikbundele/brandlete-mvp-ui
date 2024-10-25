import React, { useEffect, useContext, useState } from 'react';
import { sportData, universityData } from '../../../dataConfig/DataConfig';
import { UserContext } from '../../../context/UserContext'; // Import UserContext

import './BrandScore.css';

function BrandScore() {
  const { userDetails, updateUserDetails } = useContext(UserContext); // Access user details from context
  const [atheleticScore, setAtheleticScore] = useState(0);
  const [academicScore, setAcademicScore] = useState(0);
  const [socialScore, setSocialScore] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [brandScore, setBrandScore] = useState(9)

  // Example data for 5 activity charts

  useEffect(() => {
    calcAtheleticScore();
    calcAcademicScore();
    calcSocialScore();
  },[])

  useEffect(()=> {
    const data = [
      { label: 'Academic', percentage: academicScore / 170 * 100, score : academicScore, total : 170 },
      { label: 'Atheletic', percentage: atheleticScore / 340 * 100 , score : atheleticScore, total : 340 },
      { label: 'Social', percentage: socialScore / 340 * 100, score : socialScore, total : 340 },
    ];
    setChartData(data)
    setBrandScore(atheleticScore + academicScore + socialScore)
  }, [atheleticScore, academicScore, socialScore])

  useEffect(() => {
    console.log("brand score : ", {...userDetails, score : brandScore})
    updateUserDetails({...userDetails, score : brandScore})
  }, [brandScore])

  const calcAtheleticScore = () => {
    const sport = userDetails?.athleticDetails?.sport;
    const position = userDetails?.athleticDetails?.position;
    const totalScore = 340;
    var score = 0;
    const metricsList = sportData.find(item => item.sportname == sport).metrics.filter(item => item.positions.includes(position))
    metricsList.forEach(metric => {
      const maxCat = totalScore * metric.weightPercent / 100;
      const topStat = metric.topStat;
      const userStat = userDetails.athleticDetails?.metrics.find(item => item.name == metric.code).value;
      const metricScore = userStat * maxCat / topStat ;
      score = score + metricScore
    })
    setAtheleticScore(parseInt(score))
  }

  const calcAcademicScore = () => {
    const maxRank = universityData.map(item => item.rank).sort((a,b) => a-b).pop();
    const minRank = 1;
    const universityRank = universityData.find(item => item.name == userDetails.college)?.rank;
    const slope = 63 / (maxRank - minRank);
    const scaledRank = 5 + slope * (maxRank - universityRank);
    const academicScore = (userDetails?.academicDetails?.gpa < 2.3) ? 0 : (userDetails?.academicDetails?.gpa * 25.5) + scaledRank
    setAcademicScore(parseInt(academicScore))
  }

  const calcSocialScore = () => {
    const maxFollowers = 200000;
    const maxEngagement = 10;
    const maxFollowerPoints = 136;
    const maxEngagementPoints = 204;
    const userFollowers = userDetails?.socialDetails?.followers;
    const userEngagement = userDetails?.socialDetails?.engagement;
    const followerScore = Math.min(maxFollowerPoints, (userFollowers/maxFollowers)*maxFollowerPoints)
    const engagemantScore = Math.min(maxEngagementPoints, (userEngagement/maxEngagement)*maxEngagementPoints)
    const socialScore = followerScore + engagemantScore;
    setSocialScore(parseInt(socialScore))
  }

  return (
    <div className='brandScoreSection'>
      <label className='section-header'>BRAND SCORE</label>
      <div className='chartGrid'>
        {chartData.map((item, index) => (
          <div className='chartContainer' key={index}>
            <div className='donutChart' style={{ '--percentage': item.percentage }}>
              <span className='chartText'>{item.score}/{item.total}</span>
            </div>
            <div className='chartLabel'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandScore;

