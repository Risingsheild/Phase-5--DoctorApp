
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";

function AppointmentList(){
    const user = useSelector(selectUser)
    console.log('My Appointments',user.appointments);
    return (
        <div>
          <h2>My Appointments</h2>
      
          
          <div className="patientList">
          </div>
        </div>
      );
    }




export default AppointmentList
