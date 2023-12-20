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
                <Link to={PATHROUTES.LANDING}>
                    <img src={logo} alt="" className={style.logo} />
                </Link>
            </div>
            <div className={style.links} >
                <h1 className={style.h1}>#Drivers API</h1>
                <div className={style.links2}>
                    <Link className={style.link} to={PATHROUTES.HOME}>Home</Link>
                    <Link className={style.link} to={PATHROUTES.FORM}>Create Driver</Link>
                    <Link className={style.link} to={PATHROUTES.ABOUT}>About</Link>
                </div>
            </div>
            <div className={style.search}>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default NavBar;