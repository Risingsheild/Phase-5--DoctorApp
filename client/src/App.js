import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {fetchUser} from './features/Users/userSlice'


import LoginForm from './components/Login/loginForm';
import SignupForm from './components/Signup/signupForm';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';


import './App.css';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/login'} element={<LoginForm />}/>
        <Route exact path={"/signup"} element={<SignupForm/>}/>
      </Routes>


    </div>
  );
}

export default App;
