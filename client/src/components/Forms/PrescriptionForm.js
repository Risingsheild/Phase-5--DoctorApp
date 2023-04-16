import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPrescription } from "../../features/Prescriptions/prescriptionSlice";
import { selectUser } from "../../features/Users/userSlice";
import { addPrescription } from "../../features/Patient/patientSlice";

function PrescrirpionForm({ patient, flipped }) {
  const [name, setName] = useState("");
  const [refills, setRefills] = useState("");
  const errors = useSelector((state) => state.prescriptions.errorMessages);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log("PreFormU", user.id);
  console.log("PreForm", patient.id);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeRefills(e) {
    const regex = /^[0-5\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setRefills(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      name: name,
      refills: refills,
      user_id: user.id,
      patient_id: patient.id,
    };
    console.log("P form", payload);
    dispatch(newPrescription(payload));
    dispatch(addPrescription(payload));
    flipped();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Prescription Name:</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <label>Number of Refills</label>
      <input
        type="number"
        pattern="[0-9]*"
        placeholder="5 refills max"
        value={refills}
        onChange={handleChangeRefills}
      />
      <button type="submit">Submit New Prescription</button>
      {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{ color: "red" }}>{err}</h3>
        </p>
      ))}
    </form>
  );
}

export default PrescrirpionForm;
