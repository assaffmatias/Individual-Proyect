import { useDispatch } from 'react-redux'
import style from './SearchBar.module.css'
import { getDrivers } from '../../redux/actions';

const SearchBar = () => {

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const search = event.target.value;

        dispatch(getDrivers(search))
    }

    return (
        // <div className={style.divContainer}>
        //     <form className={style.form} action="">
        //         <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        //         <input 
        //         className={style.input} 
        //         onChange={handleSearch} 
        //         type="text" name="" id="" placeholder="Type a name"/>
        //     </form>
        // </div>

        <div className={style.container}>
            <input checked="" className={style.checkbox} type="checkbox" />
            <div className={style.mainbox}>
                <input className={style.search_input} placeholder="Search" type="text" onChange={handleSearch} />
                <div className={style.iconContainer}>
                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className={style.search_icon}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar