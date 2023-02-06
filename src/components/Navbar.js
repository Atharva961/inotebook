import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {
    console.log(location.pathname);
  }, [location]);

  const handleLogout = () =>
  {
    console.log("Logging out");
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">iNotebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className= {`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex">
              <Link className='btn btn-outline-primary mx-2' to = "/login" role="button">Login</Link>
              <Link className='btn btn-outline-primary mx-2' to = "/signup" role="button">Sign Up</Link>
            </form>:<Link className='btn btn-outline-primary mx-2' to = "/login" role="button" onClick={handleLogout}>Logout</Link>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
