import React from "react";
import '../assets/CSS/HomePage.css';
import '../assets/CSS/fonts.css';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";

export default function HomePage(){
  return (
    <>
      <div className="home-page-Grid">
         <div className="background-world"> 
         <img src="../public/Images/Jupiter-planet-background.png"/>
         </div>
        <div className="hero-third-section">
        <h1>Optimize your Vacancy-to-Placement Pipeline</h1>
        <p>The Human-First Approach to Digital Transformation</p>
        <Link to="" class="ButtonLarge">Let’s Meet!</Link>
        </div>
      </div>
      <Navbar/>
    </>
  );
};
