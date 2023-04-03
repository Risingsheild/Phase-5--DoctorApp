// import PatientCard from "./PatientCard";
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";

function PatientList() {
    const user = useSelector(selectUser)
    console.log('My patients',user.patients);

  return (
    <div>
      <h2>My Patients</h2>
  
      
      <ul>
        
        
        {/* {" "}
        {user.patients.map((p) => {
          <PatientCard
            key={p.id}
            patient={p}
            dob={p.dob}
            name={p.name}
            phone={p.phone}
            appointments={p.appointments}
        })} */}
      </ul>
    </div>
  );
}

export default PatientList;
