import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { FaBars } from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar(){ 
  return (
    <>
        <div className="nav-container">
                <nav>
                    <Link to="/"><img src="../public/Images/Jupiter-Logo-small.png" alt="Jupiter SaaS Consulting"/></Link>
                    <Link to="/Methods" disabled>Methods</Link>
                    <Link to="/ChatGPT_Bard" disabled>ChatGPT & Bard</Link>
                    <Link to="/Integrations" disabled>Integrations</Link>
                    <Link to="/Services" disabled>Services</Link>
                    <Link to="/Bootcamp" disabled>Bootcamp</Link>
                    <Link to="/Team" disabled>Team</Link>
                </nav>
        </div>
    </>
    );
};