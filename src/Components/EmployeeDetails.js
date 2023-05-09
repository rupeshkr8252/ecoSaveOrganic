import React, { useState, useEffect } from "react";
import "./EmployeeDetails.css";
import {Link} from "react-router-dom";
import Logo from "../Images/logo.webp";

const API = "http://65.2.132.88:7070/admin/get-all-emp";

const EmployeeDetails = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3YTQ5OGE5LWRjMTUtNDdiYy04MWMxLTk5ODI1OGE5YmY5NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzQ3Nzc3MSwiZXhwIjoxNzY5ODc3NzcxfQ.wqU2Aw7NE67-Vd8OMYBkwtMCTlV0j_kqGz8sDGuRrCQ";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [accessToken]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

 console.log(employees)

   
    
      return (
        <>
           <div className="save-org-logo p-3 d-flex justify-content-between bg-light">
       <div><img src={Logo} alt="" /></div> 
       <div className="main-check"><Link to="/employee"><button type="submit" className='check-btn'>Form</button></Link>
      </div> 
      </div>
        <div className="emp-details p-md-5 paddingsm">
       
          {Array.isArray(employees.details) &&
            employees.details.map((employee) => (
               
              <div key={employee.emp_id}>
              <div className="accordion d-flex flex-wrap p-md-4 paddingsm gap-4" id="accordionPanelsStayOpenExample">
               <div className="accordion-item w-100 card"> <div class="accordion-header" id="panelsStayOpen-headingThree">
               <button 
                 className="accordion-button collapsed accord-btn"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target={`#panelsStayOpen-collapse-${employee.emp_id}`}
                 aria-expanded="false"
                 aria-controls={`panelsStayOpen-collapse-${employee.emp_id}`}
                > <h2 className="emp-name">Employee Name: {employee.emp_name}</h2> </button></div>          </div>



                <div
               id={`panelsStayOpen-collapse-${employee.emp_id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`panelsStayOpen-heading-${employee.emp_id}`}
              >
                <div className="accordion-body">

                <p>Email: {employee.email}</p>
                <p>Gender: {employee.gender}</p>
                <p>Date of Birth: {employee.dob}</p>
                <p>Phone: {employee.phone}</p>
                <p>Address 1: {employee.correspondence_address}</p>
                <p>Address 2: {employee.permanent_address}</p>
                <p>Father: {employee.fathers_name}</p>
                <p>Mother: {employee.mothers_name}</p>
                <p>Bank Name: {employee.bank_name}</p>
                <p>Account Number: {employee.acc_no}</p>
                <p>IFSC Code: {employee.ifsc}</p>
                <p>PAN Number: {employee.pan}</p>
                <p>Aadhaar Number: {employee.adhar}</p>
                <p>Voter ID: {employee.voter_id}</p>
          <p>Driving License: {employee.driving_liscense}</p>
          <p>Passport Number: {employee.passport}</p>
          <p>Company: {employee.company}</p>
          <p>Department: {employee.department}</p>
          <p>Designation: {employee.designation}</p>
          <p>Role: {employee.role}</p>
          </div>
          </div>
          </div>
        </div>
          ))}
          </div>
          </>
  )
}

export default EmployeeDetails
