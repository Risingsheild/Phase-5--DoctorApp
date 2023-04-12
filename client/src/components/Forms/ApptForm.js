import Select from "react-select";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectUser, addAppointment } from "../../features/Users/userSlice";
import { newAppointment } from "../../features/Appointment/appointmentSlice";

function ApptForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allPatients = useSelector((state) => state.patients.entities);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const errors = useSelector((state) => state.appointments.errorMessages);
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

console.log(startDate);

  const patientNames = allPatients.map(({ name, id }) => ({ id, name }));
  console.log("Names", patientNames);

  function handlePatientChange(selectedPatient) {
    setPatient(selectedPatient);
  }

  const momentDateTime = moment(date + time);

  const dateTime = momentDateTime.format("LLL");
  console.log(dateTime);

  function handleSubmitForm(e) {
    e.preventDefault();
    const newAppt = {
      user_id: user.id,
      patient_id: patient.id,
      description: description,
      startDate: dateTime,
    };
    dispatch(addAppointment(newAppt));
    dispatch(newAppointment(newAppt));
    setDescription("");
    setStartDate("");
    setPatient("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h1>ApptForm</h1>
      <label>Patient</label>
      <Select
        className="patient"
        onChange={handlePatientChange} options={patientNames}>
       
    </Select>
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
      <label>Date of Appointment:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Time of Appointment:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit"> Create New Appointment </button>
      <br></br>
      {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{color: "red"}}>{err}</h3>
        </p>
      ))}
    </form>
  );
}

export default ApptForm;
