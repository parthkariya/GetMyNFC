import React from "react";
import { Features, Navbar, Vkardzprofessional } from "../../components";
import { Banner, Cards, Hero, Pricing } from "../../container";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_main">
      <Navbar />
      <Banner />
      <Cards />
      <Hero />
      <Pricing />
      <Vkardzprofessional />
      <Features />
    </div>
  );
};

export default Home;
