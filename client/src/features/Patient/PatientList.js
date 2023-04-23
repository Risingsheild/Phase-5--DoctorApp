import PatientCard from "./PatientCard";
import { useSelector } from "react-redux";
import { selectUser } from "../Users/userSlice";
import "./PatientCard.css";
// import { useState } from "react";

function PatientList() {
  const user = useSelector(selectUser);
  // const [search, setSearch] = useState("");

  const orderedPts = user.patients
    .slice()
    .sort((a, b) => a.last_name.localeCompare(b.last_name));
  // const filterPatients = () => {
  //   if (search === "") {
  //     return user.patients;
  //   } else {
  //     return user.patients.filter((p) =>
  //       p.first_name.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }
  // };
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <div>
      <h2>My Patients</h2>
      {/* <label>
        Search Patient:
        <input
          type="text"
          placeholder="patient name..."
          className="patientSearch"
          onChange={handleChange}
          value={search}
        />
      </label> */}
    
      <div className="patientList">
        {orderedPts.map((p) => (
          <PatientCard
            key={p.id}
            patient={p}
            dob={p.dob}
            first_name={p.first_name}
            last_name={p.last_name}
            phone={p.phone}
            appointments={p.appointments}
            prescriptions={p.prescriptions}
          />
        ))}
      </div>
    </div>
  );
}

export default PatientList;
