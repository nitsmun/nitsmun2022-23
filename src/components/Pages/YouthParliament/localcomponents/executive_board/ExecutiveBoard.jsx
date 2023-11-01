import './ExecutiveBoard.css';
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt={props.alt} />
            <div className="content">
                <h2>{props.title}</h2>
                <h3>{props.desgn}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}
const ExecutiveBoard = () => {
    return (
        <div className="ExecutiveBoard">
            <h1>SPEAKER</h1>
            <div className="body_of_executive_component">
                <Card src='https://res.cloudinary.com/dhry5xscm/image/upload/v1697798196/nitsmun/picture-profile-icon-human-people-260nw-1011304363_myafws.jpg' alt='card1' title='Lorem Ipsum' desgn='Lorem Ipsum' description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" />
            </div>
        </div>
    );
}
export default ExecutiveBoard;