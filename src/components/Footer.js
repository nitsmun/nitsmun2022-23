import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
// import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
// import styled from "styled-components";
import { IconContext } from "react-icons";
import {SiGmail} from "react-icons/si"
// import { Link, Route, Switch} from "react-router-dom";

// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footer-icon">
        <button className="footer-btn-a"><a
          className="footer-anchor"
          href="https://www.linkedin.com/company/nit-silchar-model-united-nations/" rel="noreferrer" 
          target="_#blank"
        >
          <FaLinkedinIn className="icon-color-a" size={23} />
        </a>
        </button>
        <button className="footer-btn-b">  <a
          className="footer-anchor"
          href="https://www.facebook.com/NITSMUN/" rel="noreferrer" 
          target="_#blank"
        >
          <FaFacebookF className="icon-color-b" size={22} />
        </a>
        </button>
        
        <button className="footer-btn-c"><a
          className="footer-anchor"
          href="https://www.instagram.com/nitsmun/?hl=en" rel="noreferrer" 
          target="_#blank"
        >
          <AiOutlineInstagram className="icon-color-c" size={30} />
        </a>
        </button>
        <button className="footer-btn-d">  <a
          className="footer-anchor"
          href="https://www.youtube.com/channel/UC1bJi0c0FcHkoIsUUJRf96A" rel="noreferrer" 
          target="_#blank"
        >
          <FaYoutube className="icon-color-d" size={26} />
        </a>
        </button>
        {/* <a className="footer-anchor" href="https://mail.google.com/mail/u/0/?fs=1&to=team.nitsmun@gmail.com&tf=cm"target='_#blank'><HiOutlineMail className="icon-color" size={20}/></a> */}

        <button className="footer-btn-e">   <a className="footer-anchor" href="mailto:team.nitsmun@gmail.com">
          <SiGmail className="icon-color-e" size={27} />
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
             <a href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929" target="_#blank" rel="norefferer"> <GoLocation className="footer-location" /></a>
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
            <a href="tel:+919101393607"><BsTelephone className="footer-phone" /></a>
              
            </div>
          </IconContext.Provider>
          <div className="phonenum">

            <div className="phonenum2">
            <a href="tel:+919101393607">+919101393607</a>
            {/* <a href="tel:+919707091602">9707091602</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
