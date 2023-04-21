import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { onUpdateAppointment, updateAppointment} from "../Users/userSlice";

function EditAppt({ appointment, onExitForm }) {
  //   const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log('Edit', appointment.id);

  const [description, setDescription] = useState(appointment.description);
  const [startDate, setStartDate] = useState(appointment.startDate);

  function handleApptUpdate(e) {
    e.preventDefault();
    const updatedAppt = {
      id: appointment.id,
      description: description,
      startDate: startDate,
    };

    const payload = {
      appointment: updatedAppt,
    };
    dispatch(updateAppointment(payload));
    dispatch(onUpdateAppointment(payload))
    onExitForm();
  }
  return (
    <div>
      <h3>Edit Appointment Info</h3>
      <form className="input-form" onSubmit={handleApptUpdate}>
        <label>
          Desciption
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Start Date and Time
          <input
            type="text"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br></br>

        <button type="submit"> Save Appointment </button>
        <br></br>
        {/* {errors} go here*/}
      </form>
    </div>
  );
}

export default EditAppt;
