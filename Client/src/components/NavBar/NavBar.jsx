import { Link, useLocation } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';
import style from './NavBar.module.css'
import logo from '../../../public/logo.png'

const NavBar = () => {
    const location = useLocation();
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className={style.divContainer}>
            <Link to={PATHROUTES.HOME}>
                <img src={logo} alt="" className={style.img}/>
            </Link>
            <Link className={style.link} to={PATHROUTES.FORM}>Create Driver</Link>
            <Link className={style.link} to={PATHROUTES.LANDING}>Go Out</Link>
        </div>
    )
}

export default NavBar;