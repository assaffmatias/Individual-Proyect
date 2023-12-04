import { Link, useLocation } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';
import style from './NavBar.module.css'
import logo from '../../../public/logo.png'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
    const location = useLocation();
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className={style.divContainer}>
            <div className={style.divLogo}>
                <Link to={PATHROUTES.HOME}>
                    <img src={logo} alt="" className={style.img} />
                </Link>
            </div>
            <div className={style.divContent} >
                <SearchBar></SearchBar>
                <Link className={style.link} to={PATHROUTES.FORM}>
                    <button className={style.button}>Create Driver</button>
                </Link>
                <Link className={style.link} to={PATHROUTES.LANDING}>
                    <button className={style.button}>Outside</button>
                </Link>
            </div>


        </div>
    )
}

export default NavBar;