import { useState } from "react";
import ReactCardFlip from "react-card-flip"
import './PatientCard.css'
import PrescrirpionForm from "../../components/Forms/PrescriptionForm";

function PatientCard({ patient }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const patientAppt = patient.appointments.map((element) => (
    <li key={element.id} style={{ fontWeight: "bold" }}>
      {element.startDate}
    </li>
  ));

  const patientPrescriptions = patient.prescriptions.map((element) => (
    <li key={element.id} style={{ fontWeight: "bold" }}>
      {element.name}, <p>Refills Allowed {element.refills}</p>
    </li>
  ));

  function handleFlipped() {
    setIsFlipped(!isFlipped);
  }


  return (

    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
    <div className="Card" onClick={handleFlipped}>
      <div className="patientHeader">
     <h3> Name: {patient.name}</h3> <p>Date of Birth : ({patient.dob})</p>{" "}
     <p> Phone Number : {patient.phone}</p>
      Patient Appointments:
      {patientAppt}
      <br></br>
      </div>
      <button onClick={handleFlipped}> Click Card for Patients Prescriptions
      </button>
      </div>
      <div className="Card">
     <h3> Name: {patient.name}</h3>
      Patient Prescriptions:
      {patientPrescriptions}
      <h5>Add New Prescription Here:</h5>
      <PrescrirpionForm patient={patient} flipped={handleFlipped} />
      <br></br>
      <button onClick={handleFlipped}> Click for Patient Demographics & Appointments</button>
    </div>
  </ReactCardFlip>
  );
}


export default PatientCard;
