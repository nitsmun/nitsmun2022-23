import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './Stats.css'

const Stats = () => {
    const [state, setState] = useState(true);
    const [active, setIsActive] = useState(true);

    return (
        <>
            <div className="stats-m">
                <div className="stat-chld">
                    <h3 className='hsgw_os vvbhj'>Over</h3>
                    {/* <CountUp className='jhui__po' start={100} end={1000} duration={1.8}
                        suffix="+" /> */}
                    <CountUp start={state ? 100 : 1000} end={1000} duration={.7} suffix="+" onEnd={() => setIsActive(false)} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='jhui__po' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3 className='hsgw_os'>Delegates hosted till date</h3>
                </div>

                <div className="stat-chld bhj__po">
                    <h3 className='hsgw_os vvbhj'>More than</h3>
                    <CountUp start={state ? 0 : 50} end={50} duration={.7} suffix="+" onEnd={() => setIsActive(false)} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='jhui__po' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h2 className='jhdsu____odis'></h2>
                    <h3 className='hsgw_os'>Executive Board overall</h3>
                </div>

                <div className="stat-chld">
                    <h3 className='hsgw_os vvbhj'>Conference Edition</h3>
                    <CountUp start={state ? 0 : 10} end={10} duration={.85} onEnd={() => setIsActive(false)} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='jhui__po' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3 className='hsgw_os'>from 17<sup>th</sup> to 19<sup>th</sup> February 2023</h3>
                </div>

                <div className="stat-chld bhj__po">
                    <h3 className='hsgw_os vvbhj'>Team of</h3>
                    <CountUp start={state ? 0 : 49} end={49} duration={.7} onEnd={() => setIsActive(false)} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='jhui__po' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h3 className='hsgw_os'>Secretariat Members</h3>
                </div>
            </div>
        </>
    )
}

export default Stats