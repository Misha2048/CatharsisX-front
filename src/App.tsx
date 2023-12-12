import React from 'react';
import './App.css';
import SignUp from './components/regestration/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './components/regestration/LogIn';
import ForgotPasswordForm from './components/ForgotPasswordForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/forgot-password' element={<ForgotPasswordForm/>} />
    </Routes>
  );
}

export default App;
