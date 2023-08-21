import React, { useState, useEffect } from 'react';
import './employee.css';
const YourComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedEmployee, setSearchedEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const data = await response.json();
        if (data.status === "success") {
          setApiData(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const employee = apiData.find(item => item.id === parseInt(searchTerm));
    setSearchedEmployee(employee);
  };

  return (
    
    <div>
        <div className="App">
      <h1>Search Employee</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <img src="/searchlogo.png" alt="Logo" className="logo" />
        </button>
      </div>
    </div>
      {searchedEmployee ? (
        <div className="employee-card">
        <div className="employee-image">
          <img src = 'https://sangamuniversity.ac.in/wp-content/uploads/2023/06/male-1.jpg' alt="Profile" />
        </div>
        <div className="employee-details">
          <h2>Employee Details</h2>
          <p>ID: {searchedEmployee.id}</p>
          <p>Name: {searchedEmployee.employee_name}</p>
          <p>Salary: {searchedEmployee.employee_salary}</p>
          <p>Age: {searchedEmployee.employee_age}</p>
        </div>
      </div>
      ) : null}
    </div>
  );
};

export default YourComponent;
