import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing_main_wrapp">
      <div className="pricing_base_wrapp">
        <header>
          <h1>Our Pricing</h1>
        </header>
        <div class="cards_price">
          <div class="card_price shadow">
            <ul>
              <li class="pack">Basic</li>
              <li id="basic" class="price bottom-bar">
                ₹750.00
              </li>
              {/* <li class="bottom-bar">500 GB Storage</li>
              <li class="bottom-bar">2 Users Allowed</li>
              <li class="bottom-bar">Send up to 3 GB</li> */}
              <li>
                <button class="btn_price">Comming Soon</button>
              </li>
            </ul>
          </div>
          <div class="card_price active">
            <ul>
              <li class="pack">Professional</li>
              <li id="professional" class="price bottom-bar">
                ₹1000.00
              </li>
              {/* <li class="bottom-bar">1 TB Storage</li>
              <li class="bottom-bar">5 Users Allowed</li>
              <li class="bottom-bar">Send up to 10 GB</li> */}
              <li>
                <button class="btn_price active-btn_price">Comming Soon</button>
              </li>
            </ul>
          </div>
          <div class="card_price shadow">
            <ul>
              <li class="pack">Master</li>
              <li id="master" class="price bottom-bar">
                ₹1250.00
              </li>
              {/* <li class="bottom-bar">2 TB Storage</li>
              <li class="bottom-bar">10 Users Allowed</li>
              <li class="bottom-bar">Send up to 20 GB</li> */}
              <li>
                <button class="btn_price">Comming Soon</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
