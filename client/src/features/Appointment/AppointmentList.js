import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import AppointmentCard from "./AppointmentCard";
import './Appointment.css'



function AppointmentList() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h2>My Appointments</h2>

      <div className="AppointmentList">
        {user.appointments.map((a) => (
          <AppointmentCard
            key={a.id}
            appointment={a}
            startDate={a.startDate}
            description={a.description}
            patient={a.patient}
          />
        ))}
        </div>
    </div>
  );
}

export default AppointmentList;


//const user = useSelector((state) => state.users.entities);
    // If no User has No Appts
    
    // const appointments = user.appointments

    // const apptList = user.appointments.map((a) => (
    //       <AppointmentCard
    //         key={a.id}
    //         appointment={a}
    //         startDate={a.startDate}
    //         description={a.description}
    //         patient={a.patient}
    //       />
    //     ));
    //     console.log('apptList', apptList);

    //   if (apptList > 0 ){
        
    //     return {apptList}
    //   } else {
    //     return <h2> You have No appointments Yet, Please Navigate to Appt Form to make your first Appt </h2>
    //   }

    //console.log('my Appts',appointments);

    // const sortedAppointments = Object.keys(appointments)
    //   .sort((a, b) => appointments[a].startDate - appointments[b].startDate)
    //   .reduce((result, key) => {
    //     result[key] = appointments[key];
    //     return result
    //   }, {})

     // console.log('Sorted Appointments', sortedAppointments);
  
