import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUser, addAppointment } from "../../features/Users/userSlice";
import { newAppointment } from "../../features/Appointment/appointmentSlice";
import { fetchPatients } from '../../features/Patient/patientSlice'

function ApptForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allPatients = useSelector((state) => state.patients.entities);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const errors = useSelector((state) => state.appointments.errorMessages);
  const [patient, setPatient] = useState("");

  useEffect(()=> {
    dispatch(fetchPatients());
  },[dispatch])
  


  const patientNames = allPatients.map(({ first_name, last_name, id }) => {
    return (
      <option key={id} value={id}>
        {first_name} {last_name}
      </option>
    );
  });

  function handleSubmitForm(e) {
    e.preventDefault();

    const newAppt = {
      user_id: user.id,
      patient_id: patient,
      description: description,
      startDate: startDate,
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
      <label>Patient: </label>
      <select className="patient" value={patient} onChange={(e) => setPatient(e.target.value)}>
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
      <button type="submit"> Create New Appointment </button>
      <br></br>
      {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{ color: "red" }}>{err}</h3>
        </p>
      ))}
    </form>
  );
}

export default ApptForm;
