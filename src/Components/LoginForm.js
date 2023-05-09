import React, { useState} from 'react';
import axios from 'axios';
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../Images/logo.webp";

const LoginForm = () => {

  const history = useNavigate();
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://65.2.132.88:7070/admin/login',
        {
          username,
          password,
        }
      );
      
      console.log(response.data);
      setUsername("");
      setPassword("");
      alert("Login successful");
      history('/employee');
    } catch (error) {
      setError('❗Invalid username or password');
    }
}
  return (
    <>
    <div className="save-org-logo p-3">
        <img src={Logo} alt="" />
    </div>
   <div className='main-box mt-3'>
   <div className='container p-md-5 paddingsm'>
     <div className='logo'>
            <h1 className='save-eco text-center'>SAVE ECO ORGANIC PVT.LTD</h1>
     </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className='input-field w-100'
            value={username}
            onChange={handleUsernameChange}
            placeholder='UserName..'
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className='input-field w-100'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password***'
          />
        </div>
        <button type="submit" className='submit-btn'>Login</button>
        <p className='login-error'>{error && <div>{error}</div>}</p>   
      </form>
      </div>
   </div>
   </>
  )
  }

export default LoginForm
