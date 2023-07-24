import React from "react";
import images from "../../constants/images";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="features-main-wrapp">
        <div className="features-base-wrapp">
          <header>
            <h1>Facilities</h1>
          </header>
          <div className="features-flex">
            <div className="features-box">
              <img src={images.cover_image_icon_2} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Cover Image</p>
                <p className="features-txt">
                  You can upload your cover image in your NFC Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img
                src={images.add_profile_image_icon}
                className="feature-img"
              />
              <div className="features-txt-box">
                <p className="features-head">Profile Image</p>
                <p className="features-txt">
                  You can upload your profile image in your NFC Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.contact_details_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Contact Details</p>
                <p className="features-txt">
                  You can Add your contact details in your NFC Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.about_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Describe About Your Business</p>
                <p className="features-txt">
                  You can Describe about your business in your NFC Business
                  Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.share_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Share NFC Business Card</p>
                <p className="features-txt">
                  You can Share your NFC Business Card to other people easily.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.document_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Upload Documents</p>
                <p className="features-txt">
                  You can upload your documents in your NFC Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.video_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Upload Viseos</p>
                <p className="features-txt">
                  You can upload videos in your NFC Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.gallery_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Image Gallery</p>
                <p className="features-txt">
                  You can upload multiple images and create galley in your NFC
                  Business Card.
                </p>
              </div>
            </div>

            <div className="features-box">
              <img src={images.download_vcf_icon} className="feature-img" />
              <div className="features-txt-box">
                <p className="features-head">Save To Phone</p>
                <p className="features-txt">
                  Anyone can download vcf file and into their phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
