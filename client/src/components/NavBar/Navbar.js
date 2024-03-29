import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/Users/userSlice";

function NavBar() {
  const user = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogoutClick() {
    dispatch(logout(user));
    navigate("/");
  }

  return (
    <div className="navbar">
      {user && !user.errors ? (
        <div>
          <h3 className="header">Hello, Dr. {user.username}</h3>
          <div className="navlinks">
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to='/appointments'><button>Upcoming Appointments</button></NavLink>
            <NavLink to='/patients'><button>My Patient List</button></NavLink>
            <NavLink to='/apptForm'><button>Make New Appointment</button></NavLink>
            <NavLink to='/patientForm'><button>Create New Patient</button></NavLink>
            {/* Add the Rest of the Links Here */}
            <button onClick={handleLogoutClick}>Log Out</button>
          </div>
        </div>
      ) : (
        <div className="navlinks">
          <NavLink to="/login">
           <button> Login </button>
          </NavLink>
          <NavLink to="signup">
          <button>Signup</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}


export default NavBar