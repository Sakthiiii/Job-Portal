import React from "react";
import '../App.css'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <h3 className="brand-logo">Fresh Start</h3>
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <NavLink to="/Jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/Coursesandexams">Courses and Exams</NavLink>
          </li>
          {/* <li>
            <NavLink to="/Connections">Connections</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/profile">Profile</NavLink>
          </li> */}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/SignupUser">Sign Up User</NavLink>
          </li>
          <li>
            <NavLink to="/SignupCompany">Sign Up Company</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
