import React, { useEffect, useState } from "react";
// import Wrapper from "./Navbar.styled";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom'
import './Practice.css'

export const Practice = () => {



  return (
    <>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <ul style={{ backgroundColor: "red" }}>
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
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ...
        </div>
      </div>
    </>
  );
}
