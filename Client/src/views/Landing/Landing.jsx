import PATHROUTES from '../../helpers/PathRoutes';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import gif from '../../../public/Welcome.gif'
import porsche from '../../../public/porsche.png'
import mclaren from '../../../public/mclaren.png'
import redbull from '../../../public/redbull.png'

const Landing = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <img src={logo} alt="" className={style.logo} />
                <Link to={PATHROUTES.HOME}>
                    <button className={style.button}>
                        <span>Let's GO!</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
            <div className={style.content}>
                <img src={gif} alt="Loading..." className={style.gif} />
            </div>
            <footer className={style.footer}>
                <img src={porsche} alt="" className={style.teams} />
                <img src={mclaren} alt="" className={style.teams} />
                <img src={redbull} alt="" className={style.teams} />
            </footer>
        </div>
    )
}

export default Landing;