import React , {useEffect} from 'react'
import './Archive.css'
import { Link } from 'react-router-dom'

const Archive = () => {
    useEffect(() => {
        document.title = 'Archive | NITSMUN';
      }, []);
    return (
        <>
            <div className="archive-main">
                <div className="archive-top">
                    <h1>Archive exist to keep things safe but not secret.</h1>
                </div>

                <div className="archive-cont">
                    <div className="archi1">
                        <div className="archi1-1">
                            <div style={{ width: '50%' }}>
                                <img src="./Images/Carousel2.jpg" className='archi1-1-img' alt="" style={{ width: '100%', objectFit: 'contain', height: '100%', pointerEvents: 'none' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <img src="./Images/juniormun2022/DSC_0689-compressed.jpg" className='archi1-2-img' alt="" style={{
                                    width: '100%', objectFit
                                        : 'contain', height: '100%', pointerEvents: 'none'
                                }} />
                            </div>
                        </div>

                        <div className="archi1-2">
                            <div style={{ width: '33.3%' }}><img style={{ width: '100%', objectFit: 'contain', height: '100%', pointerEvents: 'none' }} src="./Images/juniormun2022/DIP_8467-compressed.jpg" /></div>
                            <div style={{ width: '33.3%' }}><img style={{ width: '100%', objectFit: 'contain', height: '100%', pointerEvents: 'none' }} src="./Images/Carousel4.jpg" />
                            </div>
                            <div style={{ width: '33.3%' }}><img style={{ width: '100%', objectFit: 'contain', height: '100%', pointerEvents: 'none' }} src="./Images/Carousel6.jpg" />
                            </div>
                        </div>

                        <div className="archi1-1">
                            <div style={{ width: '50%' }}>
                                <img src="./Images/Carousel7.jpg" className='archi1-1-img' alt="" style={{ width: '100%', objectFit: 'contain', height: '100%', pointerEvents: 'none' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <img src="./Images/juniormun2022/DSC_0672-compressed.jpg" className='archi1-2-img' alt="" style={{
                                    width: '100%', objectFit
                                        : 'contain', height: '100%', pointerEvents: 'none'
                                }} />
                            </div>
                        </div>
                    </div>

                    <div className="archi2">
                        <div className="archi2-top">
                            <h1>Archive</h1>
                        </div>

                        <div className='archi2-cont archi2-cont1'>
                            <h1>20</h1>
                            <div className="link-btn-btm archi-im-btm">
                                <Link to="/nitsmun2022"><p className='p-by mock23-txt archi-modi'>NITSMUN</p></Link>
                            </div>
                        </div>

                        <div className='archi2-cont archi2-cont0'>
                            <h1>22</h1>
                            <div className="link-btn-btm archi-im-btm">
                                <Link to="/junior_mun"><p className='p-by mock23-txt archi-modi'>Junior MUN</p></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Archive