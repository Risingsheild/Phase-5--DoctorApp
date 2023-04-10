import { useState } from "react";
import { selectUser, ondeleteAppointment } from "../Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { deleteAppointment } from "./appointmentSlice";
import EditAppt from "./EditAppt";

function AppointmentCard({ appointment }) {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function exitUpdateForm() {
    setIsEditing(false);
  }
console.log(user.appointments);
  
  function handleDeleteClick() {
    dispatch(ondeleteAppointment())
    
    // dispatch(deleteAppointment(appointment));
  }

  return  (
  <div className='Card'>
  {isEditing ? (
    <EditAppt appointment={appointment} onExitForm={exitUpdateForm} />
  ) : (
    <div key={appointment.id} className='appointment'>
      <div id='appointment-inner'>
        <div className='appointment-front'><h3>{appointment.startDate}</h3><p>{appointment.patient.name}</p></div>
        <div key={appointment.description} id='appointment-back'>{appointment.description}</div>
      </div>
    </div>
  )}
  <button id='edit-button' onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit Appointment</button>
  <button id='delete-button' onClick={handleDeleteClick}>Delete Appointment</button>
</div>
)
}

export default AppointmentCard;
