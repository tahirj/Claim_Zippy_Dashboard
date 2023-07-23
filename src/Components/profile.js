
import React, { useState } from 'react';
import avatar from '../Images/profile.png';

const Profile = () => {
  const avatarstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
  };

  // Define the data in JSON format for each time range
  const data = {
    Today: {
      totalCases: 230,
      pendingCases: 120,
      approvedCases: 110,
      ivCases: 10,
      tatAdherence: '89%',
    },
    Weekly: {
      totalCases: 560,
      pendingCases: 220,
      approvedCases: 300,
      ivCases: 30,
      tatAdherence: '78%',
    },
    Monthly: {
      totalCases: 1800,
      pendingCases: 800,
      approvedCases: 900,
      ivCases: 50,
      tatAdherence: '75%',
    },
    Custom: {
      totalCases: 1000,
      pendingCases: 300,
      approvedCases: 650,
      ivCases: 40,
      tatAdherence: '80%',
    },
  };

  const [selectedTimeRange, setSelectedTimeRange] = useState('Today');
  const selectedData = data[selectedTimeRange];

  const handleTimeRangeChange = (timeRange) => {
    setSelectedTimeRange(timeRange);
  };

  return (
    <div className="container">
           <div className="topbar">
       <div className="textprofile">
         <h2>Network Manager Dashboard</h2>
       </div>
       <div>
        
        </div>
        <div className="pro">         
         <div className="ProfileName">
            <h4>Welcome Ritesh Singh</h4>

 <div  style={avatarstyle}>          
  <img src={avatar} className="avatarstyle" alt="Profile" />
          </div>

         </div>
         <div className="filtericon">

        </div>
      </div>
        
       </div>
       <hr></hr>
      <div className="cards">
        <div className="top-pro">
          <div className="profile">
            <h4>Overall Case Summary</h4>
          </div>
          <div className="tab">
            <button
              className={selectedTimeRange === 'Today' ? 'button active' : 'button'}
              onClick={() => handleTimeRangeChange('Today')}
            >
              Today
            </button>
            <button
              className={selectedTimeRange === 'Weekly' ? 'button active' : 'button'}
              onClick={() => handleTimeRangeChange('Weekly')}
            >
              Weekly
            </button>
            <button
              className={selectedTimeRange === 'Monthly' ? 'button active' : 'button'}
              onClick={() => handleTimeRangeChange('Monthly')}
            >
              Monthly
            </button>
            <button
              className={selectedTimeRange === 'Custom' ? 'button active' : 'button'}
              onClick={() => handleTimeRangeChange('Custom')}
            >
              Custom
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 ">
            <div className="icon-box">
              <h3>Total Cases</h3>
              <h1 className="totalcase">{selectedData.totalCases}</h1>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="icon-box">
              <h3>Pending Cases</h3>
              <h1 className="pendingcase">{selectedData.pendingCases}</h1>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="icon-box">
              <h3>Approved Cases</h3>
              <h1 className="approvedcase">{selectedData.approvedCases}</h1>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="icon-box">
              <h3>IV Cases</h3>
              <h1 className="ivcases">{selectedData.ivCases}</h1>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="icon-box">
              <h3>TAT Adherence</h3>
              <h1 className="tat">{selectedData.tatAdherence}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
