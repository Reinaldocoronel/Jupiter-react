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
                    <h1>Our full website will launch soon! <p> Book a meeting to learn more</p></h1>

                    {/*
                    <Link to="/Methods">Methods</Link>
                    <Link to="/ChatGPT_Bard">ChatGPT & Bard</Link>
                    <Link to="/Integrations">Integrations</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Bootcamp">Bootcamp</Link>
                    <Link to="/Team">Team</Link> */}
                </nav>
        </div>
    </>
    );
};