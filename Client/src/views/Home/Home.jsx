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
            <h1 className={style.h1}>Fórmula 1 <br />Drivers API</h1>
            <h2 className={style.h2}>508 cards with information about formula one racers</h2>
            <CardsContainer />
        </div>
    )
}

export default Home;