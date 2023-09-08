import HeroBanner from './HeroBanner/HeroBanner';
import './Home.scss';
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <div style={{height: 1000}}></div>
        </div>
    )
}

export default Home;