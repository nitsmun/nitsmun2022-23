import React from "react";
import "./Director.css";

const Director = () => {
  return (
    <div>
      <div className="glimpses-section">
        <div className="glimpses">
          <h1>Message From The Director</h1>
        </div>
      </div>

      <div className="sec-main1">
        <div className="sec-padding1"></div>
        <div className="dir-imgcon">
          <div>
            <img
              src="./Images/Director.jpg"
              alt="Prof. SIVAJI BANDYOPADHYAY"
              className="dir-img"
            />
            <h2 className="sec-nme">Prof. SIVAJI BANDYOPADHYAY</h2>
          </div>
        </div>
        <div className="sec-padding2"></div>
        <div>
          <p
            className="sec-text"
            style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "600",
              
            }}
          >
            <br />
            <br />
            Kofi Annan has rightly said, “More than ever before in human
            history, we share a common destiny. We can master it only if we face
            it together. And that, my friends, is why we have the United
            Nations.” These words are proving to be more right everyday in this
            evolving 21st century.
            <br />
            <br />
            Model United Nations (MUN) is an academic simulation of the United
            Nations which provides students or I should say “Future Leaders” of
            the world an environment to not only learn but also practice
            diplomacy and international relations.
            <br />
            <br />
            It gives me immense pleasure to announce the Eighth edition of NIT
            Silchar Model United Nations is all set to take place in February at
            NIT Silchar campus in 2020. I would like to extend a warm welcome to
            all participants and hope to witness a great conference.
            <br />
            <br />
            Prof. SIVAJI BANDYOPADHYAY
            <br />
            Director, NIT Silchar
          </p>
        </div>
        <div className="sec-padding3"></div>
      </div>
    </div>
  );
};

export default Director;
