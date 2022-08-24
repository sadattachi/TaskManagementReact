import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './Login.jsx';
import RegisterPage from './Signup.jsx';

const Main = () => {
  return (
    <>
      <h1>
        {localStorage.getItem("token") == null ? "You need to log in!" : "Logged in!"}
      </h1>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/signup' element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default Main;