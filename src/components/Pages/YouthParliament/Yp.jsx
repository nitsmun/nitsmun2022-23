import React, {useEffect}from 'react'
import './Yp.css'
import Committee from './Committee'
import Agendas from './Agendas'
import Eb from './Eb'
import Faq from './Faq'
import Sponsors from './Sponsors'

const Yp = () => {
    useEffect(()=>{
        document.title="Youth Parliament 2023 | NITSMUN"
    })

    return (
        <div className='container_yp'>
            <Committee />
            <Agendas />
            <Eb />
            <Faq />
            <Sponsors />
        </div>
    )
}

export default Yp