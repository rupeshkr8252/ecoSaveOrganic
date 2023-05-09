import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm'
import { Route, Routes } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeDetails from './Components/EmployeeDetails';

const App = () => {
  return (
   <>
   <Routes><Route path='/' element={ <LoginForm/>}/></Routes>
   <Routes><Route path='/employee' element={<EmployeeForm/>}/></Routes>
   <Routes><Route path='/details' element={<EmployeeDetails/>}/></Routes>
   </>
  )
}

export default App
