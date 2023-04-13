import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addPatient } from "../../features/Users/userSlice";
import { newPatient } from "../../features/Patient/patientSlice";

function PatientForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const errors = useSelector((state) => state.patients.errorMessages);

  const dispatch = useDispatch();
  console.log(name, dob, phone);

  function handleSubmitPatient(e) {
    e.preventDefault();
    const payload = {
      dob: dob,
      phone: phone,
      name: name,
      };
    console.log('PAyload', payload);
    dispatch(newPatient(payload));
    // dispatch(addPatient(payload));
  }
  return (
    <form onSubmit={handleSubmitPatient}>
      <h3>Patient DemoGraphics Form</h3>
      <label>Name:</label>
      <input
        type="text"
        placeholder="First and Last Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
