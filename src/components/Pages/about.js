import React from "react";
import "./about.css";
import Underline from "../Underline";
import { TabTitle } from "../Utils/Genfn";
const about = () => {
  TabTitle("About | NITS MUN");
  return (
    <div className="about-main">
      <div className="about-header">
        <ul className="about-headertxt">ABOUT US</ul>
      </div>
      <Underline/>
      <div className="about-content1">
        <ul className="contentpara1">
          NITSMUN was founded in 2014 when a group of like-minded people wanted
          to create a society for younger people to discuss, debate, and
          deliberate present-day crises whilst experiencing themselves being in
          the shoes of various world leaders. Ever since the first MUN session
          in 2014, our society has grown manifold with more enthusiastic people
          joining in and helping us emerge as one the best and most promising
          MUN societies in NE India. Our conference offers its delegates an
          unrivaled Model UN experience by running highly personalized,
          engaging, and dynamic committees.
        </ul>
        <ul className="contentpara2">
          Besides having participated in various MUNs in and around the country
          and bringing home numerous accolades and valuable experience, we have
          also hosted MUNs every single year since, with multiple mock sessions
          and collaborative conferences with world-class universities, with
          awe-inspiring members of the EB training and guiding us to think
          rationally, act quickly and solve modern-day problems and at the same
          time also provide us with the support required. NITSMUN aims at
          polishing the interpersonal, debating, and deliberating skills of the
          participants and mold them into a leader of tomorrow.
        </ul>
      </div> 
      <div className="about-headertxt2">
        <h1>Our Vision</h1>
      </div>
      <Underline />
      <div className="about-content2">
        <ul className="content-para3">
          NITSMUN aspires to involve youth in international dialogue, deliberate
          upon the dire issues of the world and shape them into strong
          individuals who'll become the leaders of tomorrow.
        </ul>
      </div>
      <div className="about-headertxt2">
        <h1>What is a Model UN?</h1>
      </div>
      <Underline />
      <div className="about-content2">
        <ul className="content-para4">
          A Model United Nations is an academic simulation of the United
          Nations. Students act as delegates and discuss real-world problems.
          These simulations are conducted by various universities, colleges, and
          schools to elevate the debating, presentation, oratory, deliberative
          skills of students and acquaint them with the pressing ongoing
          problems in the world and give them an opportunity to brainstorm and
          try finding solutions to them, whilst keeping in mind their foreign
          policies. Every conference has different committees and each committee
          discourses upon a certain agenda and tries to find fixes and solutions
          to the problems.
        </ul>
      </div>
    </div>
  );
};

export default about;
