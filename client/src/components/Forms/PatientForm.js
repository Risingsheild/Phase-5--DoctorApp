import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPatient } from "../../features/Patient/patientSlice";
import { nanoid } from "@reduxjs/toolkit";

function PatientForm() {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const errors = useSelector((state) => state.patients.errorMessages);
  const dispatch = useDispatch();
 
 function handleSubmitPatient(e) {
    e.preventDefault();
    const payload = {
      id: nanoid(),
      dob: dob,
      phone: phone,
      first_name: first_name,
      last_name: last_name
      };
      setDob('')
      setFirst_Name('')
      setLast_Name('')
      setPhone('')
    dispatch(newPatient(payload));
  }
  return (
    <form onSubmit={handleSubmitPatient}>
      <h3>Patient DemoGraphics Form</h3>
      <label>First Name:</label>
      <input
        type="text"
        placeholder="First Name"
        value={first_name}
        onChange={(e) => setFirst_Name(e.target.value)}
      />
      <label>Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => setLast_Name(e.target.value)}
      />
      <br></br>
      <label htmlFor="dob">DOB:</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br></br>
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        placeholder="Format: 123-456-7890"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br></br>

      <button type="submit" onSubmit={handleSubmitPatient}>
        Submit New Patient
      </button>
      {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{ color: "red" }}>{err}</h3>
        </p>
      ))}
    </form>
  );
}

export default PatientForm;
