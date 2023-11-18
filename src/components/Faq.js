/** @format */

import React, { useState } from "react";

import { FaqData } from "./Dataset";

const Faqs = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: "#212529", size: "1.25rem" }}>
            <FaqSection>
                <div className="faq-section">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <Container>
                    {FaqData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Faqmain onClick={() => toggle(index)}>
                                    <h1>{item.question}</h1>
                                    <span>
                                        {clicked === index ? (
                                            <FiMinus color="white" />
                                        ) : (
                                            <FiPlus color="white" />
                                        )}
                                    </span>
                                </Faqmain>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </React.Fragment>
                        );
                    })}
                </Container>
            </FaqSection>
        </IconContext.Provider>
    );
};

export default Faqs;
