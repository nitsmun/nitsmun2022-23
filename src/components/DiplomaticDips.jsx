import React from 'react'

import { diplomaticdips } from './Dataset';

import './Diplomatic.css';

const DiplomaticDips = () => {

    return (
        <>
            <div className='bybharat-top'>
                <h1>Diplomatic Dips</h1>
                <div className="diplomatic-insta">
                    {diplomaticdips.map((item) => {
                        return (
                            <>
                                <div className="insta">
                                    <h2>{item.title}</h2>
                                    <iframe class="insta-vid" title=' ' src={item.src} scrolling="yes" />
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

export default DiplomaticDips