import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchUser } from "./features/Users/userSlice";
import { fetchPatients } from "./features/Patient/patientSlice";

import LoginForm from "./components/Login/loginForm";
import SignupForm from "./components/Signup/signupForm";
import NavBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import PatientList from "./features/Patient/PatientList";
import AppointmentList from "./features/Appointment/AppointmentList";
import ApptForm from "./components/Forms/ApptForm";
import PatientForm from "./components/Forms/PatientForm";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchUser())
    .then(dispatch(fetchPatients()));
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<LoginForm />} />
        <Route exact path={"/signup"} element={<SignupForm />} />
        <Route exact path={"/patients"} element={<PatientList />} />
        <Route exact path={"/appointments"} element={<AppointmentList />} />
        <Route exact path={"/apptForm"} element={<ApptForm />} />
        <Route exact path={"/patientForm"} element={<PatientForm />} />
      </Routes>
    </div>
  );
}

export default App;
