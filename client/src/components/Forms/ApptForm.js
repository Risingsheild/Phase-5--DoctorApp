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
  // const errors = useSelector((state) => state.errorMessages);
  const [patient, setPatient] = useState("");

  
  const canSave =
    Boolean(patient) && Boolean(description) && Boolean(startDate);

  const patientNames = allPatients.map((pt) => (
    <option key={pt.id} value={pt.id}>
      {pt.first_name} {pt.last_name}
    </option>
  ));

  function handleSubmitForm(e) {
    e.preventDefault();

    const newAppt = {
      id: nanoid(),
      patient_id: patient,
      description: description,
      startDate: startDate,
    };
    dispatch(newAppointment(newAppt));
    // dispatch(addAppt(newAppt))
    setDescription("");
    setStartDate("");
    setPatient("");
  }

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
        onChange={(e) => setStartDate(e.target.value)}
      />
      <br />
      {canSave ? (
        <button type="submit"> Create New Appointment </button>
      ) : (
        <h3> Please fill in all information to save Appointment </h3>
      )}
      {/* <button type="submit" disabled={!canSave}> Create New Appointment </button>
      <br></br> */}
      {/* {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{ color: "red" }}>{err}</h3>
        </p>
      ))} */}
    </form>
  );
}

export default ApptForm;
