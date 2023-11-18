import React, { useState } from 'react';
import styled from 'styled-components';

import { FaqData } from './Dataset';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom:15vh;
  /* background: #06553d; */
  background-color: var(--color-10-100);
  user-select: none;
  @media only screen and (max-width:991px){
    padding-bottom: 10vh;
  }
`;

const Container = styled.div`
  top: 0%;
  width: 85%;
  
`;

const Faqmain = styled.div`
  /* background: #3ca06a; */
  background-color: var(--color-1-080);
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: justify;
  text-align-last: left;
  cursor: pointer;
  margin: 1rem 0;
  border-radius: 0.9375rem;
  transition: all 0.2s ease-in;
  &:hover {
    /* background-color: var( --color-4-100); */
    background-color: var( --color-1-100);
    /* color: #212529; */
  }
  h1 {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500 !important;
    font-family: 'Nunito', sans-serif;
  }
  span {
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 993px) {
    h1 {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 289px) {
    h1 {
      font-size: 0.6rem;
    }
  }
`;

const Dropdown = styled.div`
  /* background-color: var(--color-14-100); */
  background-color: #6c2966;
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  margin-bottom: 6vh;
  font-weight: 500;
  padding: 0.9375rem 1.25rem;
  text-align: justify;
  text-align-last: left;
  line-height: 1.4;
  p {
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
  }
  @media only screen and (max-width: 993px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 289px) {
    p {
      font-size: 0.6rem;
    }
  }
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <main className='main__faq'>
      <IconContext.Provider value={{ color: "#212529", size: "1.25rem", background:"#EBEAEA" }}>
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
                    <span>{clicked === index ? <FiMinus color='white' /> : <FiPlus color='white' />}</span>
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
    </main>


  );
};

export default Faq