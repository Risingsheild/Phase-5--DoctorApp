import { useState } from "react";
import { ondeleteAppointment, deleteAppointment } from "../Users/userSlice";
import { useDispatch } from "react-redux";
import EditAppt from "./EditAppt";

function AppointmentCard({ appointment }) {
  // const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function exitUpdateForm() {
    setIsEditing(false);
  }
  
  function handleDeleteClick() {
    dispatch(ondeleteAppointment(appointment.id))
    dispatch(deleteAppointment(appointment.id))
  }


  // appointment.startDate.split('-')[0]}/{appointment.startDate.split('-')[1]}/{appointment.startDate.split('-')[2].split('T')[0]

  return  (
  <div className='Card'>
  {isEditing ? (
    <EditAppt appointment={appointment} onExitForm={exitUpdateForm} />
  ) : (
    <div key={appointment.id} className='appointment'>
      <div id='appointment-inner'>
        <div className='appointment-front'><h3>Appointment: {appointment.startDate}</h3><p>{appointment.patient.first_name} {appointment.patient.last_name}</p></div>
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
