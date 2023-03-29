// import PatientCard from "./PatientCard";
import { useSelector } from "react-redux";

function PatientList() {
  const patients = useSelector((state) => state.patients.entities);
  console.log(patients);

  return (
    <div>
      <h2>My Patients</h2>

      
      <ul>
        
        {patients}
        {/* {" "}
        {patients.map((p) => {
          <PatientCard
            key={p.id}
            patient={p}
            dob={p.dob}
            name={p.name}
            phone={p.phone}
            appointments={p.appointments}
            prescriptions={p.prescriptions}
          />;
        })} */}
      </ul>
    </div>
  );
}

export default PatientList;
