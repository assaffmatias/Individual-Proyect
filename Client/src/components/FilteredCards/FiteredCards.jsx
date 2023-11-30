import { useDispatch, useSelector } from "react-redux";
import { filterDrivers, orderDrivers, selectTeam } from "../../redux/actions";
import style from "./FiteredCards.module.css"
import SearchBar from "../SearchBar/SearchBar";

const FilteredCards = () => {
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        const value = event.target.value;
        dispatch(orderDrivers(value))
    };

    const handleFilter = (event) => {
        const value = event.target.value;
        dispatch(filterDrivers(value))
    };

    const handleFilterTeam = (event) => {
        const teamName = event.target.value;
        dispatch(selectTeam(teamName))
    };

    return (
        <div className={style.divContainer}>
            <SearchBar></SearchBar>
            <div className={style.selectDiv}>
                <select className={style.select} onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="notCreated">Not Created</option>
                </select>

                <select className={style.select} onChange={handleOrder}>
                    <option value="nameUpward">Name Upward</option>
                    <option value="nameFalling">Name Falling</option>
                    <option value="dobUpward">Date of Birth Upward</option>
                    <option value="dobFalling">Date of Birth Falling</option>
                </select>

                <select className={style.select} name="" id="" onChange={handleFilterTeam}>
                    <option value="" disabled>Select a team</option>

                    {teams.map((team) => (
                        <option key={team.name} value={team.name}>
                            {team.name}
                        </option>
                    ))}
                </select>
            </div>
            
        </div>
    )
}

export default FilteredCards;