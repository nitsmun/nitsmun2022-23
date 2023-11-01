import './Agendas.css'
const Card = (props) => {
    return (
        <div className='card'>
            <div style={{ backgroundImage: `url('${props.src}')` }} className='desc-container'>
                <p>
                    <h3 style={{ fontWeight: '900' }}>{props.name}</h3><br />
                    {props.desc}
                </p>
            </div>
            <h3>{props.name}</h3>
        </div>
    );
}
const Agendas = () => {
    return (
        <div className='Agendas'>
            <h1>Agendas</h1>
            <div className='card-container'>
                <Card src='https://res.cloudinary.com/dz2mlxltd/image/upload/v1698832098/nitsmun/3_ylw4op.png' alt="One Nation, One Election" name="ONE NATION, ONE ELECTION" desc={`One Nation, One Election" is a proposed electoral reform in India, aiming to synchronize all national, state, and local elections to be held simultaneously. This concept seeks to reduce the frequent electoral cycle, minimize disruption to governance, and save resources. Advocates believe it can enhance political stability, while critics argue it may dilute regional issues and challenges.`} />
                <Card src='https://res.cloudinary.com/dz2mlxltd/image/upload/v1698832095/nitsmun/hqdefault_jrwq9l.jpg' alt="Unrest at Manipur" name="UNREST AT MANIPUR" desc={`Unrest in Manipur, a state in northeastern India, is marked by a long history of insurgency, ethnic conflicts, and demands for autonomy. Various insurgent groups have operated in the region, leading to periodic violence and security challenges. These issues are rooted in ethnic, political, and economic grievances, with efforts by both state and central governments to address them through negotiations and security measures.`} />
            </div>
        </div>
    );
}
export default Agendas;