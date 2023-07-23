import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const Case = () => {
    const caseData = [
        {
          "enrsCode": "312567",
          "caseId": "1-56894524",
          "caseDate": "23rd July 2023",
          "zone": "North",
          "receivedFrom": "Apsar Shaik",
          "processName": "Provider Infrastructure Verification",
          "caseName": "12548-Apollo Hospital Nerul, Navi Mumbai",
          "status": "Work flow Created",
          "timeElapsed": "-",
          "dateExtension": "30 June 2023",
          "assignedTo": "Amit Kumar",
          "remarks": "-"
        },
        {
          "enrsCode": "312568",
          "caseId": "1-56894525",
          "caseDate": "24th July 2023",
          "zone": "South",
          "receivedFrom": "John Doe",
          "processName": "Some Process",
          "caseName": "Some Case",
          "status": "In Progress",
          "timeElapsed": "2 days",
          "dateExtension": "-",
          "assignedTo": "Jane Smith",
          "remarks": "Need further review"
        },
        {
          "enrsCode": "312569",
          "caseId": "1-56894526",
          "caseDate": "24th July 2023",
          "zone": "South",
          "receivedFrom": "Jack Pro",
          "processName": "Some Process",
          "caseName": "Some Case",
          "status": "In Progress",
          "timeElapsed": "2 days",
          "dateExtension": "-",
          "assignedTo": "Michele",
          "remarks": "-"
        },
        {
          "enrsCode": "312570",
          "caseId": "1-56894527",
          "caseDate": "24th July 2023",
          "zone": "East",
          "receivedFrom": "Mick Jord",
          "processName": "Some Process",
          "caseName": "Some Case",
          "status": "Completed",
          "timeElapsed": "2 days",
          "dateExtension": "-",
          "assignedTo": "Happy Hogan",
          "remarks": "-"
        },
      ]
      
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the data based on the inputText
    const filtered = caseData.filter((data) =>
      data.caseId.toLowerCase().includes(inputText.toLowerCase()) ||
      data.enrsCode.toLowerCase().includes(inputText.toLowerCase()) ||
      data.receivedFrom.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [inputText]);

  let inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <div className="casehead">
        <h3>Empanelment Case</h3>
        <h3>Search by:</h3>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Case ID / ENRS Code / Received From"
          />
        </div>
      </div>
      <div className="tabledata">
        <table border={1}>
          <thead className="table-th">
            <tr>
              <th>ENRS Code</th>
              <th>Case Id</th>
              <th>Case Date</th>
              <th>Zone</th>
              <th>Received From</th>
              <th>Process Name</th>
              <th>Case Name</th>
              <th>Status</th>
              <th>Time Elapsed</th>
              <th>Date Extension</th>
              <th>Assigned To</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="12">No data found</td>
              </tr>
            ) : (
              filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.enrsCode}</td>
                  <td>{data.caseId}</td>
                  <td>{data.caseDate}</td>
                  <td>{data.zone}</td>
                  <td>{data.receivedFrom}</td>
                  <td>{data.processName}</td>
                  <td>{data.caseName}</td>
                  <td>{data.status}</td>
                  <td>{data.timeElapsed}</td>
                  <td>{data.dateExtension}</td>
                  <td>{data.assignedTo}</td>
                  <td>{data.remarks}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Case;
