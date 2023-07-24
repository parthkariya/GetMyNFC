import React from "react";
import images from "../../constants/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <header className="vkardzprofessional-header">
        <h1>Our Goals</h1>
      </header>
      <div className="cards-main">
        <div className="cards-img-part"></div>
        {/* <img src={images.goal_icon} alt="" className="goal-img" /> */}
        <div class="row">
          <div class="card">
            <img class="card-icon" src={images.savetime_icon} />
            <h3 class="card-title">Minimize Your Time</h3>
            <p class="card-text">
              Since we want to save you time, we'll share all of your
              information in a single tap rather than telling you everything
              there is to know about your business.
            </p>
            {/* <a class="card-link" href="#">
              Learn more
            </a> */}
          </div>

          <div class="card">
            <img class="card-icon" src={images.savemoney_icon} />
            <h3 class="card-title">Spending Less</h3>
            <p class="card-text">
              You won't need to buy paper cards as often because you can update
              your information at any time with a single NFC Digital Business
              card.
            </p>
            {/* <a class="card-link" href="#">
              Learn more
            </a> */}
          </div>

          <div class="card">
            <img class="card-icon" src={images.turndigital} alt="monitoring" />
            <h3 class="card-title"> Turn To Digital</h3>
            <p class="card-text">
              Everything will be digital in the upcoming years, thus we must
              also turn to digital.
            </p>
            {/* <a class="card-link" href="#">
              Learn more
            </a> */}
          </div>

          <div class="card">
            <img class="card-icon" src={images.savetree_icon} alt="" />
            <h3 class="card-title">Save The Tree</h3>
            <p class="card-text">
              Paper is widely used, and as a result, many trees are cut down;
              therefore, we should avoid using it and educate everyone about it.
            </p>
            {/* <a class="card-link" href="#">
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
