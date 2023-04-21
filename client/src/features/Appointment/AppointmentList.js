import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import AppointmentCard from "./AppointmentCard";
import "./Appointment.css";

function AppointmentList() {
  const user = useSelector(selectUser);

  const orderedAppt = user.appointments
    .slice()
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  if (user.appointments.length > 0) {
    return orderedAppt.map((a) => {
      return (
        <AppointmentCard
          key={a.id}
          appointment={a}
          startDate={a.startDate}
          description={a.description}
          patient={a.patient}
        />
      );
    });
  } else {
    return <h3> Please Make your First Appointment </h3>;
  }
}

export default AppointmentList;
