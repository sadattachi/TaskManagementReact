import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './Login.jsx';
import RegisterPage from './Signup.jsx';
import WorkersPage from './Workers.jsx';

const Main = () => {
  return (
    <>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/signup' element={<RegisterPage />}></Route>
        <Route exact path='/workers' element={<WorkersPage />}></Route>
      </Routes>
    </>
  );
}

export default Main;