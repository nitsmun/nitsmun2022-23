import React, { useState } from 'react';
import { FaqData } from './Dataset';
import styled from 'styled-components';
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
  @media only screen and (max-width:991px){
    padding-bottom: 10vh;
  }
`;

const Container = styled.div`
  top: 0%;
  width: 90%;
`;

const Faqmain = styled.div`
  /* background: #3ca06a; */
  background-color: var(--color-14-100);
  color: black;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: justify;
  text-align-last: left;
  cursor: pointer;
  margin:1rem 0;
  border-radius: 0.9375rem;
  transition: all 0.2s ease-in;
  &:hover {
    /* background-color: lightblue; */
    background-color: var(--color-14-038);
    color: var(--color-1-100);
  }
  h1 {
    padding: 1rem;
    font-size: 1.2rem;
  }
  span {
    margin-right: 1.5rem;
  }
  
  @media only screen and (max-width:993px){
    h1{
        font-size: 0.8rem;
    }}
    @media only screen and (max-width:289px){
      h1{
        font-size: 0.6rem;
      }
    }
`;

const Dropdown = styled.div`
  background-color: var(--color-14-100);
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  margin-bottom: 6vh;
  font-weight: 600;
  padding:  0.9375rem 1.25rem;
  text-align: justify;
  text-align-last: left;
  line-height: 1.4;
  font-family: Montserrat;
  p {
    font-size: 1rem;
  }
  @media only screen and (max-width:993px){
    p{
        font-size: 0.8rem;
    }
}
@media only screen and (max-width:289px){
      p{
        font-size: 0.6rem;
      }}
`;

const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#212529', size: '1.25rem' }}>
      <FaqSection>

      <div className="faq-section">
          <h1>FAQ</h1>
        </div>

        <Container>
          {FaqData.map((item, index) => {
            return (
              <>
                <Faqmain onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Faqmain>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faqs;