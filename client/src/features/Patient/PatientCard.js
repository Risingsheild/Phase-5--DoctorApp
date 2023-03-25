import { useState } from "react";

function PatientCard({ id, name, phone, dob, appointments, users, prescriptions} ) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  return (
    <div className="patient">
      <div className="container">
        <button
          className={expand ? "bttn-clicked" : "bttn"}
          onClick={handleClick}
        >
          {name} ({dob}) <br></br> {phone}
          <span className={expand ? "hamburger cross" : "hamburger"}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
        <div className="expanded">

            <ul>
            {appointments.startDate} <br></br> <li>{prescriptions}</li>
            </ul>


        </div>
    </div>
  );
}

export default PatientCard;
