import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/imagenHome.png";
import BackgroundMobile from "../../assets/imagenHomeMobile.png";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="background">
      <picture>
        <source media="(max-width:800px)" srcSet={BackgroundMobile} />
        <img
          className="background-image"
          loading="eager"
          src={Background}
          alt="Background"
        />
      </picture>
      <section className="landing">
        <Link to={`/home/`}>
          <button className="landing-btn">HOME</button>
        </Link> 
      </section>
    </main>
  );
}
