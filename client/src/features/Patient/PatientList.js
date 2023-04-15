import PatientCard from "./PatientCard";
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import './PatientCard.css'

function PatientList() {
    const user = useSelector(selectUser)
    console.log('My patients in patient list',user.patients);

  return (
    <div>
<h2>My Patients</h2>
  {/* <form>
  <input type="text" placeholder="Search..."/>
  <button type="submit">Search</button>
</form> */}
      
      <div className="patientList">
        
        {user.patients.map((p) => (
          <PatientCard
            key={p.id}
            patient={p}
            dob={p.dob}
            name={p.name}
            phone={p.phone}
            appointments={p.appointments}
            prescriptions={p.prescriptions}/>
            
        ))}
      </div>
    </div>
  );
}

export default PatientList;
