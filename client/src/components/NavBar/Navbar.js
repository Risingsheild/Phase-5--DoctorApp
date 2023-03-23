import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/Users/userSlice";

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
          <header>Hello, Dr. {user.username}</header>
          <div className="navlinks">
            <NavLink to="/">Home</NavLink>
            {/* Add the Rest of the Links Here */}
            <button onClick={handleLogoutClick}>Log Out</button>
          </div>
        </div>
      ) : (
        <div className="navlinks">
          <NavLink onClick={() => dispatch(reset())} to="/login">
            Login
          </NavLink>
          <NavLink onClick={() => dispatch(reset())} to="signup">
            Signup
          </NavLink>
        </div>
      )}
    </div>
  );
}


export default NavBar