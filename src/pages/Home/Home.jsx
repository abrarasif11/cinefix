import Popular from '../Popular/Popular';
import HeroBanner from './HeroBanner/HeroBanner';
import './Home.scss';
import TopRated from './TopRated/TopRated';
import Tranding from './Tranding/Tranding';
const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
            <Tranding/>
            <Popular/>
            <TopRated/>
            
        </div>
    )
}

export default Home;