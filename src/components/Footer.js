import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
// import styled from "styled-components";
import { IconContext } from "react-icons";
// import { Link, Route, Switch} from "react-router-dom";

// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footer-icon">
        <button className="footer-btn-a"><a
          className="footer-anchor"
          href="https://www.linkedin.com/company/nit-silchar-model-united-nations/"
          target="_#blank"
        >
          <FaLinkedinIn className="icon-color-a" size={23} />
        </a>
        </button>
        <button className="footer-btn-b">  <a
          className="footer-anchor"
          href="https://www.facebook.com/NITSMUN/"
          target="_#blank"
        >
          <FaFacebookF className="icon-color-b" size={22} />
        </a>
        </button>
        
        <button className="footer-btn-c"><a
          className="footer-anchor"
          href="https://www.instagram.com/nitsmun/?hl=en"
          target="_#blank"
        >
          <AiOutlineInstagram className="icon-color-c" size={30} />
        </a>
        </button>
        <button className="footer-btn-d">  <a
          className="footer-anchor"
          href="https://www.youtube.com/channel/UC1bJi0c0FcHkoIsUUJRf96A"
          target="_#blank"
        >
          <FaYoutube className="icon-color-d" size={26} />
        </a>
        </button>
        {/* <a className="footer-anchor" href="https://mail.google.com/mail/u/0/?fs=1&to=team.nitsmun@gmail.com&tf=cm"target='_#blank'><HiOutlineMail className="icon-color" size={20}/></a> */}

        <button className="footer-btn-e">   <a className="footer-anchor" href="mailto:team.nitsmun@gmail.com">
          <HiOutlineMail className="icon-color-e" size={27} />
        </a>
        </button>
      </div>

      <div className="footer-below">
           <div className="footer-heading-ph">
           <h1 style={{ color: "white" }}>
            <a href="/">NITSMUN</a>
           </h1>
          </div>
        <div className="footer-pic">
            <a href="/" className="footer-heading" style={{ color: "white" }}>
              <img src="./Images/nitsmun-logo.svg" alt="" />
            </a>

          {/* <h1 className="footer-heading" style={{color : 'white'}}>
                        <Link className="footer-heading" style={{color:'white'}} to="/">
                            NITSMUN
                        </Link>
                    </h1> */}
        </div>
        <div className="footer-below1">
          <IconContext.Provider
            value={{ className: "shared-class", size: 55, color: "white" }}
          >
            <div>
              <GoLocation className="footer-location" />
            </div>
          </IconContext.Provider>
          <div className="address">
            <ul>Model United Nations</ul>
            <ul>NIT Silchar</ul>
            <ul className="light-address">Silchar, Assam</ul>
          </div>
        </div>
        <div className="footer-below2">
          <IconContext.Provider
            value={{ className: "shared-class", size: 40, color: "white" }}
          >
            <div>
              <BsTelephone className="footer-phone" />
            </div>
          </IconContext.Provider>
          <div className="phonenum">
            <ul>9634077495</ul>
            <ul>9707091602</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
