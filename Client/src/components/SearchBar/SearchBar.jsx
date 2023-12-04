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
        <div className={style.divContainer}>
            <form className={style.form} action="">
                <input 
                className={style.input} 
                onChange={handleSearch} 
                type="text" name="" id="" placeholder="Type a name"/>
            </form>
        </div>
    )
}

export default SearchBar