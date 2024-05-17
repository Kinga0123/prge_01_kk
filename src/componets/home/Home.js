import React from "react";
import "./Home.css";
import plan_wat from "./Zrzut ekranu 2024-04-12 102300.png";
import { Link } from "react-router-dom";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">O projekcie</div>
      </div>
      <div className="home_bottom">
        <div className="home_left">
          <img className="plan_wat" src={plan_wat} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Strona internetowa z interaktywną mapą
          </div>
          <Link to="services">
            <button className="home_right_btn">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;