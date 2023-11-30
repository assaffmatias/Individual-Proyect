import PATHROUTES from '../../helpers/PathRoutes';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className={style.divContainer}>
            <div className={style.title}>
                <h1 className={style.h1}>WELCOME</h1>
                <h1 className={style.h1}>TO</h1>
                <h1 className={style.h1}>THE</h1>
                <h1 className={style.h1}>DRIVERS</h1>
                <h1 className={style.h1}>API</h1>
            </div>

            <div className={style.divButton} >
                <Link to={PATHROUTES.HOME}>
                    <button className={style.button}>Let's go!</button>
                </Link>
            </div>
        </div>

    )
}

export default Landing;