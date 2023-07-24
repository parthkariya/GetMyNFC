import React, { useEffect, useState } from "react";
import { ShareSocial } from "react-share-social";
import "./Lnadingpage.css";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { FaFileAlt, FaLink, FaYoutubeSquare } from "react-icons/fa";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import ReactReadMoreReadLess from "react-read-more-read-less";

import {
  BsTelephoneFill,
  BsWhatsapp,
  BsYoutube,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaMobileAlt, FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";
// import { GrDocumentText } from "react-icons/gr`";
import { IoLocationSharp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { get_data_url } from "../utils/constants";
import axios from "axios";
import { useParams } from "react-router";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GridLoader } from "react-spinners";

const LandingPage = () => {
  const [getdata, setData] = useState({});
  const [getdocumentdata, setdocumentdata] = useState([]);
  const [getyoutubedata, setyoutubedata] = useState([]);
  const [getlinkdata, setlinkdata] = useState([]);
  const [getgallerydata, setgallerydata] = useState([]);
  const [getgalleryid, setgalleryid] = useState();
  const [loading, setloading] = useState(false);
  const [get_Bio, set_Bio] = useState("");

  const [readMore, setReadMore] = useState(false);
  const [getDataname, setDataname] = useState();
  const [getDatacompanyname, setDatacompanyname] = useState(false);
  const [dataname, setdataname] = useState();
  const [datacompanyname, setdatacompanyname] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const Getdata = async () => {
    setloading(true);

    const formData = new FormData();
    formData.append("alias", params.slug);
    const response = await axios
      .post(get_data_url, formData, {
        headers: {
          Accept: "application/x.businesscard.v1+json",
        },
      })
      .then((res) => {
        console.log("---res : ", res);
        // setdocumentdata(res.data.data.documentdata);
        if (res.data.status == 1) {
          console.log("jfaq -->", res.data.data);
          setData(res.data.data);
          setyoutubedata(res.data.data.youtubedata);
          setdocumentdata(res.data.data.documentdata);
          setlinkdata(res.data.data.linkdata);
          setgallerydata(res.data.data.gallerydata);
          set_Bio(res.data.data.company_bio);
          setloading(false);
        } else if (res.data.status == 0) {
          console.log("business responce ", res.data);
          // setloading(false);
          // history.push("*");
          navigate("/");
        }
      })
      .catch((err) => {
        // history.push("*");
        // setloading(false);
        navigate("*");
        console.log("business error", err);
      });
  };

  useEffect(() => {
    console.log("getdocumentdata", getdocumentdata);
    // console.log("getgallery id is", getgalleryid);
    Getdata();
  }, []);

  useEffect(() => {
    // setdataname(getdata.name);
    // setdatacompanyname(getdata.company_name);
    if (loading === false && getdata !== 0) {
      let btn = document.getElementById("webshareapi");

      btn.addEventListener("click", function () {
        // console.log("check", dataname);
        // console.log("check1", datacompanyname);
        console.log(getdata.name);
        console.log(getdata.company_name);
        navigator.share({
          url: document.URL,
          title: document.title,
          // text: `${getdata.name} | ${getdata.company_name} - Digital Visiting Card | NFC`,
          text: "Get My NFC",
        });
      });
    } else {
    }
  });

  function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    //looping through our images array to create img elements
    const imageCards = getgallerydata.map((image) => (
      <img
        className="image-card"
        onClick={() => showImage(image)}
        src={image.image_full_path}
      />
    ));

    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
      console.log(";;", image);
      setImageToShow(image);
      setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = getgallerydata.indexOf(imageToShow);
      if (currentIndex >= getgallerydata.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getgallerydata[currentIndex + 1];
        console.log("next", nextImage);

        setImageToShow(nextImage);
      }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = getgallerydata.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getgallerydata[currentIndex - 1];
        console.log("prew", nextImage);
        setImageToShow(nextImage);
      }
    };

    return (
      <div>
        <div className="lightbox_main_wrapp">{imageCards}</div>

        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            <button className="lightbox_btn_wrapp" onClick={showPrev}>
              <BsFillCaretLeftFill
                className="lightbox_btn"
                style={{ color: getdata.color }}
              />
            </button>
            <img id="lightbox-img" src={imageToShow.image_full_path}></img>
            <button className="lightbox_btn_wrapp" onClick={showNext}>
              <BsFillCaretRightFill
                className="lightbox_btn"
                style={{ color: getdata.color }}
              />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>
          {getDataname} {` | `} {getDatacompanyname}
          {` - Digital Visiting Card | NFC`}
        </title>
      </Helmet> */}
      <Helmet>
        <title>{`${getdata.name} | ${getdata.company_name} - Digital Visiting Card | NFC`}</title>
      </Helmet>
      {loading ? (
        <>
          <div className="loading-con">
            <div className="loadingcon-inner">
              <GridLoader
                color="#36d7b7"
                loading={loading}
                // cssOverride={override}
                size={30}
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                }}
              />
              <p
                className="loading-txt"
                style={{
                  justifySelf: "center",
                  alignSelf: "center",
                  textAlign: "center",
                }}
              >
                Please wait while we are loading your Digital Profile
              </p>
            </div>
          </div>
        </>
      ) : (
        <section className="landing-sec">
          <div className="landing-hero-img-box">
            {getdata.cover_image_full_path ? (
              <img
                // src="https://acaaocard.com/uploads/banners/BNILithuania-1665473811-Banner.png"

                src={getdata.cover_image_full_path}
                alt="hero image"
                className="hero-img"
              />
            ) : (
              // <img
              //   src="https://acaaocard.com/uploads/banners/BNILithuania-1665473811-Banner.png"
              //   // src={getdata.cover_image_full_path}
              //   alt="hero image"
              //   className="hero-img"
              // />
              <div className="hero-img bg-hero-img-color">
                <p
                  style={{
                    color: getdata.color,
                    fontWeight: "600",
                    margin: "0px",
                  }}
                >
                  Put your Cover Image here
                </p>
              </div>
            )}
          </div>

          <div className="landing-profile-con">
            <div className="landing-profile-part">
              <div className="landing-profile-img-box">
                <img
                  src={getdata.profile_image_full_path}
                  alt="profile image"
                  className="profile-img"
                />
              </div>
              <p
                className="landing-profile-name"
                style={{ color: getdata.color }}
              >
                {getdata.name}
              </p>
              <p
                className="landing-profile-job-pos"
                style={{ color: getdata.color }}
              >
                {getdata.job_position}
              </p>

              <div className="landing-profile-post_logo"></div>
            </div>
            <div className="landing-profile-border"></div>
            <div className="landing-profile-part2">
              <div className="landing-profile-con-info">
                <AiFillHome
                  className="landing-con-icon"
                  style={{ color: getdata.color }}
                />
                <p
                  className="landing-profile-name"
                  style={{ color: getdata.color }}
                >
                  {getdata.company_name}
                </p>
              </div>
              <div className="landing-profile-con-info">
                <BsTelephoneFill
                  className="landing-con-icon"
                  style={{ color: getdata.color }}
                />
                <a
                  className="landing-profile-number"
                  href={"tel:" + `${getdata.country_code}${getdata.mobile_no}`}
                >
                  +{getdata.country_code} {getdata.mobile_no}
                </a>
              </div>
              {getdata.alternate_no === null || "" ? null : (
                <div className="landing-profile-con-info">
                  <FaMobileAlt
                    className="landing-con-icon"
                    style={{ color: getdata.color }}
                  />
                  <a
                    className="landing-profile-number"
                    href={
                      "tel:" + `${getdata.country_code}${getdata.alternate_no}`
                    }
                  >
                    +{getdata.country_code} {getdata.alternate_no}
                  </a>
                </div>
              )}

              <div className="landing-profile-con-info">
                <AiFillMail
                  className="landing-con-icon"
                  style={{ color: getdata.color }}
                />
                <a
                  className="landing-profile-number"
                  href={"mailto:" + `${getdata.email}`}
                >
                  {getdata.email}
                </a>
              </div>
              <div className="landing-profile-con-info">
                <TbWorld
                  className="landing-con-icon"
                  style={{ color: getdata.color }}
                />
                <a className="landing-profile-number" href={getdata.website}>
                  {getdata.website}
                </a>
              </div>
              <div className="landing-profile-con-info">
                <MdLocationOn
                  className="landing-con-icon"
                  style={{ color: getdata.color }}
                />
                <p className="landing-profile-number landing-profile-con-last">
                  {getdata.address}
                  <br />
                  {getdata.city_name} - {getdata.pincode} &nbsp;
                  {getdata.state_name} &nbsp;
                  {getdata.country_name}
                </p>
              </div>
            </div>
          </div>
          <div className="about-company-con">
            <p
              className="landing-profile-about-company"
              style={{ color: getdata.color }}
            >
              About {getdata.company_name}&nbsp;
            </p>
            <p
              className="landing-profile-about-bio"
              style={{ color: getdata.color }}
            >
              {/* {getdata.company_bio} */}

              {/* <ReactReadMoreReadLess
                className="landing-profile-about-bio"
                charLimit={40}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                style={{ color: getdata.color }}
              >
                {get_Bio}
              </ReactReadMoreReadLess> */}
              {get_Bio === "" ||
              get_Bio == null ||
              get_Bio === undefined ? null : (
                <>
                  {readMore ? get_Bio : `${get_Bio.substring(0, 200)}...`}

                  <button
                    className="btn-readmore"
                    style={{
                      background: "none",
                      color: "#000",
                      border: "none",
                      cursor: "pointer",
                      // marginTop: "10px",
                      padding: "0px",
                      fontWeight: "600",
                    }}
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "Show less" : "  Read more"}
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="landing-profile-social-icon-section">
            <button
              id="webshareapi"
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              {/* <FaShareAlt className="landing-profile-social-btn-icon" /> */}
              <i data-feather="share">
                <FaShareAlt className="landing-profile-social-btn-icon" />
              </i>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a
                href={
                  "tel:" +
                  `${getdata.country_code === "91" ? "" : "00"}${
                    getdata.country_code
                  }${getdata.mobile_no}`
                }
              >
                <BsTelephoneFill className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={"mailto:" + `${getdata.email}`}>
                <AiFillMail className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a
                href={
                  "https://api.whatsapp.com/send?phone=" +
                  `${getdata.country_code}${getdata.whatsapp}`
                }
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={getdata.facebook}>
                <RiFacebookFill className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={getdata.instagram}>
                <BsInstagram className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={getdata.twitter}>
                <BsTwitter className="landing-profile-social-btn-icon" />
              </a>
            </button>
            <button
              className="landing-profile-social-btn"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={getdata.linkedin}>
                <FaLinkedinIn className="landing-profile-social-btn-icon" />
              </a>
            </button>
          </div>
          <section className="landing-profile-social-section">
            {getdata.bni === 1 ? (
              <div className="landing-profile-social-inner">
                <div className="landing-profile-social-btns">
                  <span
                    className="landing-profile-social-btn-first"
                    style={{ backgroundColor: getdata.color }}
                  >
                    BNI Profile
                  </span>
                </div>

                <div className="landing-profile-other-btns">
                  {/* <button
                  className="landing-profile-other-btn"
                  style={{
                    color: getdata.color,
                    border: "1px solid" + `${getdata.color}`,
                  }}
                >
                  Find a Chapter
                </button> */}

                  <a
                    style={{
                      color: getdata.color,
                      border: "1px solid" + `${getdata.color}`,
                    }}
                    className="landing-profile-other-btn-link landing-profile-other-btn"
                    target="_blank"
                    // download
                    href={getdata.find_chapter}
                  >
                    <button
                      className="landing-bni-profile_inner-btn"
                      style={{
                        color: getdata.color,
                        border: "1px solid" + `${getdata.color}`,
                      }}
                    >
                      Find Chapter
                    </button>
                  </a>

                  <a
                    style={{
                      color: getdata.color,
                      border: "1px solid" + `${getdata.color}`,
                    }}
                    className="landing-profile-other-btn-link landing-profile-other-btn"
                    target="_blank"
                    download
                    href={getdata.plan_calender}
                  >
                    <button
                      className="landing-bni-profile_inner-btn"
                      style={{
                        color: getdata.color,
                        border: "1px solid" + `${getdata.color}`,
                      }}
                    >
                      Book 1-2-1 with me
                    </button>
                  </a>
                </div>
                <div className="landing-profile-other-btns">
                  {/* <button
                  className="landing-profile-other-btn"
                  style={{
                    color: getdata.color,
                    border: "1px solid" + `${getdata.color}`,
                  }}
                >
                  Gains Profile
                </button> */}

                  <a
                    style={{
                      color: getdata.color,
                      border: "1px solid" + `${getdata.color}`,
                    }}
                    className="landing-profile-other-btn-link landing-profile-other-btn"
                    target="_blank"
                    download
                    href={getdata.gains_profile_image_full_path}
                  >
                    <button
                      className="landing-bni-profile_inner-btn"
                      style={{
                        color: getdata.color,
                        border: "1px solid" + `${getdata.color}`,
                      }}
                    >
                      Gains Profile
                    </button>
                  </a>

                  <a
                    style={{
                      color: getdata.color,
                      border: "1px solid" + `${getdata.color}`,
                    }}
                    className="landing-profile-other-btn-link landing-profile-other-btn"
                    target="_blank"
                    download
                    href={getdata.chapter_roaster_image_full_path}
                  >
                    <button
                      className="landing-bni-profile_inner-btn"
                      style={{
                        color: getdata.color,
                        border: "1px solid" + `${getdata.color}`,
                      }}
                    >
                      Chapter Roaster
                    </button>
                  </a>
                </div>
              </div>
            ) : null}
          </section>
          <div className="landing-profile-map-sec">
            <iframe
              src={getdata.google_maps}
              width="100%"
              height="450"
            ></iframe>
          </div>

          <section className="youtube-sec">
            {/* {console.log("youtube data length", getdata.youtubedata.length)} */}
            <div className="youtube-con-main">
              {getyoutubedata && getyoutubedata.length > 0 ? (
                <>
                  <div
                    className="all-data-main-head"
                    style={{ color: getdata.color }}
                  >
                    My Videos
                  </div>
                </>
              ) : null}
            </div>
            <div className="youtube-con">
              <>
                {getyoutubedata && getyoutubedata.length > 0
                  ? getyoutubedata.map((item, index) => {
                      return (
                        <div className="youtube-item">
                          <a
                            href={item.youtube}
                            target="_blank"
                            style={{ color: getdata.color }}
                          >
                            <FaYoutubeSquare className="youtube-item-icon" />
                          </a>
                          <p>{item.title == null ? null : item.title}</p>
                        </div>
                      );
                    })
                  : null}
              </>
            </div>
          </section>

          <section className="youtube-sec">
            <div className="youtube-con-main">
              {getdocumentdata && getdocumentdata.length > 0 ? (
                <>
                  <div
                    className="all-data-main-head"
                    style={{ color: getdata.color }}
                  >
                    My Documents
                  </div>
                </>
              ) : null}
            </div>
            <div className="youtube-con">
              <>
                {getdocumentdata && getdocumentdata.length > 0
                  ? getdocumentdata.map((item, index) => {
                      console.log("jyhfhgffhfhgf", item);
                      return (
                        <div className="youtube-item">
                          <a
                            href={item.image_full_path}
                            target="_blank"
                            className="youtube-link"
                            style={{ color: getdata.color }}
                          >
                            <FaFileAlt className="youtube-item-icon" />
                          </a>
                          <p>{item.titles == null ? null : item.titles}</p>
                        </div>
                      );
                    })
                  : null}
              </>
            </div>
          </section>

          <section className="youtube-sec">
            {/* {console.log("youtube data length", getdata.youtubedata.length)} */}
            <div className="youtube-con-main">
              {getlinkdata && getlinkdata.length > 0 ? (
                <>
                  <div
                    className="all-data-main-head"
                    style={{ color: getdata.color }}
                  >
                    My Links
                  </div>
                </>
              ) : null}
            </div>
            <div className="youtube-con">
              <>
                {getlinkdata && getlinkdata.length > 0
                  ? getlinkdata.map((item, index) => {
                      return (
                        <div className="youtube-item">
                          <a
                            href={item.link}
                            target="_blank"
                            style={{ color: getdata.color }}
                          >
                            <FaLink className="youtube-item-icon" />
                          </a>
                          <p>
                            {item.link_title == null ? null : item.link_title}
                          </p>
                        </div>
                      );
                    })
                  : null}
              </>
            </div>
          </section>

          <section className="youtube-sec">
            <div className="youtube-con-main">
              {getgallerydata && getgallerydata.length > 0 ? (
                <>
                  <div
                    className="all-data-main-head"
                    style={{ color: getdata.color }}
                  >
                    Gallery
                  </div>
                </>
              ) : null}
            </div>
            <div className="youtube-con">
              <ImageGallery />
            </div>
          </section>
          <div className="last-btn-con">
            <button
              className="toggle-btn-last"
              style={{ backgroundColor: getdata.color }}
            >
              <a href={getdata.vcf_full_path} className="toggle-btn-last-link">
                <BsFillPersonFill className="icon-last-btn" /> Save to Phone
              </a>
            </button>
          </div>
          <footer
            className="landing-footer"
            style={{ backgroundColor: getdata.color }}
          >
            <p className="footer-content">@Copyright 2022</p>
            <p className="footer-content">Applified</p>
          </footer>

          {/* <section className="document-section">

        </section> */}
        </section>
      )}
    </>
  );
};

export default LandingPage;
