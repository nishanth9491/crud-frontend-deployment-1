import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-warning">
      <Link to="/" className="navbar-brand">
        CRUD OPERATION
      </Link>
      <div className="nav">
        <Link to="/create-student" className="nav-link">
          Create Student
        </Link>
        <Link to="/student-list" className="nav-link">
          Student List
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
