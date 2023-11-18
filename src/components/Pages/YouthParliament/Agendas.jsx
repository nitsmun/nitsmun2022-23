import React from 'react'

import './Agendas.css'

const Agendas = () => {

    return (
        <main className='cont_parent0'>
            <h1>AGENDAS</h1>

            <div id="flex_agendas">
                <div className="child_agenda1">
                    <div id="img__hoder_agendas">
                        <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1698832095/nitsmun/hqdefault_jrwq9l.jpg" alt="" />

                        <div id='content___main'>
                            <h1 id='content___main__h1'>One Nation, One Election</h1>
                            <p id='content___main__p'>Imagine synchronized national and regional elections in India! "One Nation One Election" (ONOE) aims to do just that. It promises to save time and resources while ensuring uninterrupted governance. However, making this a reality is like solving a complex jigsaw puzzle due to India's vast size and diverse political landscapes.</p>
                        </div>
                    </div>


                </div>

                <div className="child_agenda1" id='agenda2'>
                    <div id="img__hoder_agendas">
                        <img src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1698832098/nitsmun/3_ylw4op.png" alt="" />
                        <div id='content___main'>
                            <h1 id='content___main__h1'>Unrest in Manipur</h1>
                            <p id='content___main__p'>In the beautiful northeastern state of Manipur, persistent unrest has marred its potential. Ethnic tensions, autonomy demands, and territorial disputes have fueled the flames. Peace talks and development initiatives are the keys to unlock a brighter future, but it's a puzzle with many pieces, including diverse tribal groups. Bringing stability to Manipur is crucial for the entire northeastern region's peace and progress.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Agendas