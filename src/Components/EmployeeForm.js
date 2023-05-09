import React, { useState } from "react";
import "./EmployeeForm.css";
import Logo from "../Images/logo.webp";
import {Link} from "react-router-dom";

const EmployeeForm = () => {

  const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3YTQ5OGE5LWRjMTUtNDdiYy04MWMxLTk5ODI1OGE5YmY5NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzQ3Nzc3MSwiZXhwIjoxNzY5ODc3NzcxfQ.wqU2Aw7NE67-Vd8OMYBkwtMCTlV0j_kqGz8sDGuRrCQ";
  const [userData, setUserData] = useState({
    empName: "",
    email: "",
    gender: "",
    dob: "",
    phone: "",
    address1: "",
    address2: "",
    father: "",
    mother: "",
    bankName: "",
    accNumber: "",
    ifsc: "",
    pan: "",
    adhar: "",
    voterId: "",
    dL: "",
    passport: "",
    company: "",
    department: "",
    designation: "",
    role: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const {
      empName,
      email,
      gender,
      dob,
      phone,
      address1,
      address2,
      father,
      mother,
      bankName,
      accNumber,
      ifsc,
      pan,
      adhar,
      voterId,
      dL,
      passport,
      company,
      department,
      designation,
      role,
    } = userData;

    if (empName && email && phone) {
      const res = fetch(
        "http://65.2.132.88:7070/admin/emp/add",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            empName,
            email,
            gender,
            dob,
            phone,
            address1,
            address2,
            father,
            mother,
            bankName,
            accNumber,
            ifsc,
            pan,
            adhar,
            voterId,
            dL,
            passport,
            company,
            department,
            designation,
            role
          }),
        }
      );
      
      if (res) {
        setUserData({
          empName: "",
          email: "",
          gender: "",
          dob: "",
          phone: "",
          address1: "",
          address2: "",
          father: "",
          mother: "",
          bankName: "",
          accNumber: "",
          ifsc: "",
          pan: "",
          adhar: "",
          voterId: "",
          dL: "",
          passport: "",
          company: "",
          department: "",
          designation: "",
        role: "",
      });
     } alert("Data Stored");
    } else {
      alert("Please fill Data.");
    }
  };

  return (
    <>
    <div className="save-org-logo p-3 d-flex justify-content-between">
       <div><img src={Logo} alt="" /></div> 
       <div className="main-check"><Link to="/details"><button type="submit" className='check-btn'>Saved Data</button></Link>
</div> 
    </div>
      <div className="emp-form p-md-5 padding-sm mt-3">
        <div className="logo mt-4">
          <h1 className="save-eco text-center mb-4">
            SAVE ECO ORGANIC PVT.LTD
          </h1>
        </div>
        <form onSubmit= {submitData} method="POST">
          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="empName">Employee Name:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="empName"
                name="empName"
                className="input-fields w-100"
                value={userData.empName}
                onChange={postUserData}
                placeholder="Enter name.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="email"
                id="email"
                name="email"
                className="input-fields w-100"
                value={userData.email}
                onChange={postUserData}
                placeholder="Enter Email.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="gender">Gender:</label>
            </div>
            <div className="col-md-8 col-sm-12">
            <select  className="input-fields w-100"
                 id="disabledSelect"
                  defaultValue=""
                  name="gender"
                  value={userData.gender}
                  onChange={postUserData}
                >
                <option value="" disabled hidden>
                    Select Gender
                  </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="dob">Date of Birth:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="date"
                id="dob"
                name="dob"
                className="input-fields w-100"
                value={userData.dob}
                onChange={postUserData}
                placeholder="Enter DOB.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="phone">Phone:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="phone"
                name="phone"
                className="input-fields w-100"
                value={userData.phone}
                onChange={postUserData}
                placeholder="Enter Phone.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="address1">Address 1:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="address1"
                name="address1"
                className="input-fields w-100"
                value={userData.address1}
                onChange={postUserData}
                placeholder="Enter Address 1.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="address2">Address 2:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="address2"
                name="address2"
                className="input-fields w-100"
                value={userData.address2}
                onChange={postUserData}
                placeholder="Enter Address 2.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="father">Employee Father's Name:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="father"
                name="father"
                className="input-fields w-100"
                value={userData.father}
                onChange={postUserData}
                placeholder="Enter father's name.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="mother">Employee Mother's Name:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="mother"
                name="mother"
                className="input-fields w-100"
                value={userData.mother}
                onChange={postUserData}
                placeholder="Enter Mother's name.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="bankName">Bank Name:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="input-fields w-100"
                value={userData.bankName}
                onChange={postUserData}
                placeholder="Enter Bank name.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="accNumber">Account Number:</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="accNumber"
                name="accNumber"
                className="input-fields w-100"
                value={userData.accNumber}
                onChange={postUserData}
                placeholder="Enter Account number.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="ifsc">IFSC :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="ifsc"
                name="ifsc"
                className="input-fields w-100"
                value={userData.ifsc}
                onChange={postUserData}
                placeholder="Enter Bank ifsc.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="pan">PAN Number :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="pan"
                name="pan"
                className="input-fields w-100"
                value={userData.pan}
                onChange={postUserData}
                placeholder="Enter Pan number.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="adhar">Aadhar Number :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="adhar"
                name="adhar"
                className="input-fields w-100"
                value={userData.adhar}
                onChange={postUserData}
                placeholder="Enter Aadhar number.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="voterId">Voter Number :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="voterId"
                name="voterId"
                className="input-fields w-100"
                value={userData.voterId}
                onChange={postUserData}
                placeholder="Enter Voter number.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="dL">Driving Lisence :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="dL"
                name="dL"
                className="input-fields w-100"
                value={userData.dL}
                onChange={postUserData}
                placeholder="Enter driving lisence.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="passport">Passport number :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="number"
                id="passport"
                name="passport"
                className="input-fields w-100"
                value={userData.passport}
                onChange={postUserData}
                placeholder="Enter passport Number.."
              />
            </div>
          </div>


          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="company">Company Name :</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                id="company"
                name="company"
                className="input-fields w-100"
                value={userData.company}
                onChange={postUserData}
                placeholder="Enter Company Name.."
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="department">Department :</label>
            </div>
            <div className="col-md-8 col-sm-12">
            <select className="input-fields w-100"
                 id="disabledSelect"
                  defaultValue=""
                  name="department"
                  value={userData.department}
                  onChange={postUserData}>
                <option value="" disabled hidden>
                    Select Department
                  </option>
                  <option value="Department1">Department1</option>
                  <option value="Department2">Department2</option>
                  <option value="Department3">Department3</option>
                </select>

            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="department">Designation :</label>
            </div>
            <div className="col-md-8 col-sm-12">
            <select className="input-fields w-100"
                 id="disabledSelect"
                  defaultValue=""
                  name="designation"
                  value={userData.designation}
                  onChange={postUserData}>
                <option value="" disabled hidden>
                    Select Designation
                  </option>
                  <option value="Designation1">Designation1</option>
                  <option value="Designation2">Designation2</option>
                  <option value="Designation3">Designation3</option>
                </select>

            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="role">Role:</label>
            </div>
            <div className="col-md-8 col-sm-12">
            <select  className="input-fields w-100"
                 id="disabledSelect"
                  defaultValue=""
                  name="role"
                  value={userData.role}
                  onChange={postUserData}
                >
                <option value="" disabled hidden>
                    Select Role
                  </option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
          </div>
          <button type="submit" className='submit-btn mt-4'>Submit</button>
          
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
