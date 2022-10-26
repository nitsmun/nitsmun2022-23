import React from 'react';
import './Quirky.css';
import { Quirky } from './Dataset';
import { Link } from 'react-router-dom';
const QuirkyCombats = () => {
  return (
    <>
    <div className='bybharat-top'>
            <h1>Quirky Combats</h1>
            <div className="main-bybharat">
                {Quirky.map((item) => {
                    return (
                        <>
                            <div key={item.id} className="main-indi">
                                <img src={item.img} alt="" />
                                <Link to={`/combat/${item.id}`}><p className="p-by">Read more</p></Link>
                            </div>
                        </>
                    )
                })}
            </div>
            <p className='p-more'>Stay tuned for more episodes!</p>
        </div>
    </>
  )
}

export default QuirkyCombats;