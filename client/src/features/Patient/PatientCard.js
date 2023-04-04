import { useState } from "react";
import ReactCardFlip from "react-card-flip"
import './PatientCard.css'

function PatientCard({ patient }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const patientAppt = patient.appointments.map((element) => (
    <li key={element.id} style={{ fontWeight: "bold" }}>
      {element.startDate}
    </li>
  ));
  console.log(patientAppt);

  function handleFlipped() {
    setIsFlipped(!isFlipped);
  }


  return (

    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
    <div className="Card" onClick={handleFlipped}>
      <div className="patientHeader">
     <h3> Name: {patient.name}</h3> <p>Date of Birth : ({patient.dob})</p>{" "}
     <p> Phone Number : {patient.phone}</p>
      </div>
      <button onClick={handleFlipped}> for Patients Appointments
      </button>
      </div>
      <div className="Card" onClick={handleFlipped}>
     <h3> Name: {patient.name}</h3>
      Patient Appointments:
      {patientAppt}
      <br></br>
      <button onClick={handleFlipped}> Flip to Patient Demographics</button>
    </div>
  </ReactCardFlip>
  );
}


export default PatientCard;
