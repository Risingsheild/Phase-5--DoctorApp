import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, newPrescription } from "../../features/Users/userSlice";

function PrescrirpionForm({ patient, flipped }) {
  const [name, setName] = useState("");
  const [refills, setRefills] = useState("");
  // const errors = useSelector(selectErrors)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const canSave =
    Boolean(name) && Boolean(refills);

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
    dispatch(newPrescription(payload));
    flipped();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Prescription Name:</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <br/>
      <label>Number of Refills:</label>
      <input
        type="number"
        pattern="[0-9]*"
        placeholder="5 refills max"
        value={refills}
        onChange={handleChangeRefills}
      />
      <br/>
      {canSave ? (
        <button type="submit"> Submit New Prescription </button>
      ) : (
        <h5> Complete form to save new prescription </h5>
      )}
      {/* {errors?.map((err) => (
        <p id="errors" key={err}>
          <h3 style={{ color: "red" }}>{err}</h3>
        </p>
      ))} */}
    </form>
  );
}

export default PrescrirpionForm;
