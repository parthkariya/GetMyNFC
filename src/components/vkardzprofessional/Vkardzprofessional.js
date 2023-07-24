import React from "react";
import images from "../../constants/images";
import "./Vkardzprofessinal.css";

const Vkardzprofessional = () => {
  return (
    <>
      <div className="vkardzprofessional-main-wrapp">
        <div className="vkardzprofessional-base-wrapp">
          <header className="vkardzprofessional-header">
            <h1>For professionals, Get My NFC | NFC Business Card</h1>
            <p className="vkardzprofessional-head-txt">
              Professionals from many industries make up the clientele for our
              digital business cards. Pick the one that best reflects YOU!
            </p>
          </header>
          <div className="vkardzprofessional-cards">
            <div className="vkardzprofessional-card shadow">
              <div className="vkardzprofessional-card-inner-flex">
                <div className="vkardzprofessional-card-iconbox">
                  <img
                    src={images.business_person_icon}
                    className="vkardzprofessional-icon"
                  />
                </div>
                <p className="vkardzprofessional-card-txt">Businessman</p>
              </div>
            </div>

            <div className="vkardzprofessional-card shadow">
              <div className="vkardzprofessional-card-inner-flex">
                <div className="vkardzprofessional-card-iconbox">
                  <img
                    src={images.ca_icon}
                    className="vkardzprofessional-icon"
                  />
                </div>
                <p className="vkardzprofessional-card-txt">CA</p>
              </div>
            </div>

            <div className="vkardzprofessional-card shadow">
              <div className="vkardzprofessional-card-inner-flex">
                <div className="vkardzprofessional-card-iconbox">
                  <img
                    src={images.doctor_icon}
                    className="vkardzprofessional-icon"
                  />
                </div>
                <p className="vkardzprofessional-card-txt">Doctor</p>
              </div>
            </div>

            <div className="vkardzprofessional-card shadow">
              <div className="vkardzprofessional-card-inner-flex">
                <div className="vkardzprofessional-card-iconbox">
                  <img
                    src={images.lawyer_icon}
                    className="vkardzprofessional-icon"
                  />
                </div>
                <p className="vkardzprofessional-card-txt">Lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vkardzprofessional;
