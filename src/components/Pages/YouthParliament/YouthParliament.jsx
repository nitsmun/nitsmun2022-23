import Agendas from './localcomponents/agendas/Agendas';
import ExecutiveBoard from './localcomponents/executive_board/ExecutiveBoard';
import './YoutParliament.css';
import Faq from './localcomponents/Faq'
const YouthParliament = () => {
    return (
        <div className='youth-parliament'>
            <Agendas />
            <ExecutiveBoard />
            <Faq />
        </div>
    );
}
export default YouthParliament;