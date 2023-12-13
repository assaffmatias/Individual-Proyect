import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDrivers, getTeams } from '../../redux/actions';
import style from './Home.module.css'
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDrivers())
        dispatch(getTeams())
    }, [])

    return (
        <div className={style.divContainer}>
            <CardsContainer />
        </div>
    )
}

export default Home;