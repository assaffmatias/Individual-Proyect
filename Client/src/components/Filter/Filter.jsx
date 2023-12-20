import { useDispatch, useSelector } from "react-redux";
import { filterDrivers, selectTeam } from "../../redux/actions";
import style from "./Filter.module.css"

const Filter = () => {
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch();

    const handleFilter = (value) => {
        // const value = event.target.value;
        dispatch(filterDrivers(value))
    };

    const handleFilterTeam = (event) => {
        const teamName = event.target.value;
        dispatch(selectTeam(teamName))
    };

    return (
        <>
            <div className={style.filtered} onClick={() => handleFilter("all")} role="button">All Drivers</div>
            <div className={style.filtered} onClick={() => handleFilter("created")} role="button">Created</div>
            <div className={style.filtered} onClick={() => handleFilter("notCreated")} role="button">Not Created</div>

            <select className={style.select} name="" id="" onChange={handleFilterTeam}>
                {teams.map((team) => (
                    <option key={team.name} value={team.name}>
                        {team.name}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Filter;