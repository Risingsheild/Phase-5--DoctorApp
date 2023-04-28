import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newAppointment } from "../../features/Users/userSlice";
import { nanoid } from "@reduxjs/toolkit";

function ApptForm() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const allPatients = useSelector((state) => state.patients.entities);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isValidDate, setIsValidDate] = useState(false)
  const [errors, setErrors] = useState('')
  const [patient, setPatient] = useState("");

  const canSave =
    Boolean(patient) && Boolean(description) && Boolean(startDate);

  const patientNames = allPatients.map((pt) => (
    <option key={pt.id} value={pt.id}>
      {pt.first_name} {pt.last_name}
    </option>
  ));

  const handleDateChange = (e) => {
    const inputDate = new Date (e.target.value)
    const currentDate = new Date()

    if (inputDate > currentDate ){
      setIsValidDate(true)
    } else {
      setIsValidDate(false)
    }
    setStartDate(e.target.value)
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (isValidDate) {
    const newAppt = {
      id: nanoid(),
      patient_id: patient,
      description: description,
      startDate: startDate,
    };
    dispatch(newAppointment(newAppt));
    setDescription("");
    setStartDate("");
    setPatient("");
  } else {
    setErrors(<div style={{color: 'red'}}><h2>Not A Valid Date</h2><p>Make Sure Appt is for a Future Date</p></div>)
  }}

  return (
    <form onSubmit={handleSubmitForm}>
      <h1>ApptForm</h1>
      <label>Patient: </label>
      <select
        className="patient"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      >
        <option> Please Choose a Patient </option>
        {patientNames}
      </select>
      <br></br>
      <label>Reason For Appointment:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What is going on?"
      />

      <br></br>
      <label>Date and Time of Appointment:</label>
      <input
        id="date"
        type="datetime-local"
        value={startDate}
        onChange={handleDateChange}
      />
      <br />
      {canSave ? (
        <button type="submit"> Create New Appointment </button>
      ) : (
        <h3> Please fill in all information to save the appointment </h3>
      )}
      <br></br>
      {errors}
    </form>
  );
}

export default ApptForm;
