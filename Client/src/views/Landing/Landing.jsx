import PATHROUTES from '../../helpers/PathRoutes';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import landing from '../../../public/Landing.jpg'

const Landing = () => {
    return (
        <div className={style.divContainer}>
            <img className={style.img} src={landing} alt="" />

            <div className={style.divButton} >
                <h3 className={style.h3} >DRIVERS API · F1</h3>
                <h1 className={style.h1}>WELLCOME</h1>
                <Link className={style.link} to={PATHROUTES.HOME}>
                    <button className={style.button}>Let's go!</button>
                </Link>
            </div>
        </div>

    )
}

export default Landing;