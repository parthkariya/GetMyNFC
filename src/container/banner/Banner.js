import axios from "axios";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div>
        <div className="banner-text">
          <h1>The virtual business card</h1>
          <p>
            Our digital business cards enable you to instantly communicate
            personal and professional information such as contact information,
            social media profiles, websites, and much more.
          </p>

          <button>Sign Up</button>
        </div>
      </div>
      <img
        class="banner-image"
        src="https://preview.ibb.co/bMi5Y6/banner_img.png"
        alt="monitoring"
      />
    </section>
  );
};

export default Banner;
