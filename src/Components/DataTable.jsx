import React from 'react';
import Case from './case';
import Profile from './profile';

const DataTable = () => {
  // Replace this with your actual data
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 },
  ];

  return (
    
    <>
    <div className="container-body">
    <Profile/>
    <Case/>
    </div>
    </>
  );
};

export default DataTable;
