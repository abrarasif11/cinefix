import HeroBanner from './HeroBanner/HeroBanner';
import './Home.scss';
import Tranding from './Tranding/Tranding';
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Tranding/>
            <div style={{height: 1000}}></div>
        </div>
    )
}

export default Home;