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
  background: #06553d;
  @media only screen and (max-width:991px){
    padding-bottom: 10vh;
  }
`;

const Container = styled.div`
  top: 0%;
  width: 90%;
`;

const Faqmain = styled.div`
  background: #3ca06a;
  color: #161c2f;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin:1rem 0;
  border-radius: 15px;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: lightblue;
    color: black;
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
  background: #3ca06a;
  color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 2vh;
  font-weight: 600;
  padding:  15px 20px;
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
    <IconContext.Provider value={{ color: '#212529', size: '20px' }}>
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