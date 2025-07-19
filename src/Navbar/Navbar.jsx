import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { icons } from '../Constant/Icons/Icons';
import Close from '../assets/images/x.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container p-0">
          <div className='header_content' onClick={() => navigate('/landing')}>
            Resn8
          </div>
          <div className='d-flex gap-3'>
            <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
              <ul className="navbar-nav gap-5 ">
                <li className="nav-item">
                  <NavLink className="nav-link header_content_one" to="/capture">Capture Voice</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link header_content_one" to="/report">Find Talent</NavLink>
                </li>
                <li className="nav-item me-5">
                  <NavLink className="nav-link header_content_one" to="/signup">Sign in</NavLink>
                </li>
              </ul>
            </div>
            <button className='join_button d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block' onClick={() => navigate('/pricing')}>
              Join Now
            </button>
            <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
              <div style={{ color: "white", fontSize: "30px" }}>{icons.ThreelineIcon}</div>
            </button>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-top" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className='d-flex justify-content-end pe-5 pt-4'>
          <button type="button" className='close_button' data-bs-dismiss="offcanvas" aria-label="Close">
            <img src={Close} alt="" />
          </button>
        </div>
        <ul className="navbar-nav gap-5 mt-5">
          <li className="nav-item">
            <NavLink className="nav-link header_content_one" to="/capture">Capture Voice</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header_content_one" to="/report">Find Talent</NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link header_content_one" to="/signup">Sign in</NavLink>
          </li>
          <button className='join_button' onClick={() => navigate('/pricing')}>
            Join Now
          </button>
        </ul>
      </div>
    </>
  )
}