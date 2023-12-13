import { useDispatch, useSelector } from "react-redux";
import { filterDrivers, selectTeam } from "../../redux/actions";
import style from "./Filter.module.css"

const Filter = () => {
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        const value = event.target.value;
        dispatch(filterDrivers(value))
    };

    const handleFilterTeam = (event) => {
        const teamName = event.target.value;
        dispatch(selectTeam(teamName))
    };

    return (
        <>
            <select className={style.select} onChange={handleFilter}>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="notCreated">Not Created</option>
            </select>

            <select className={style.select} name="" id="" onChange={handleFilterTeam}>
                <option value="" disabled>Select a team</option>
                <option value="">None</option>

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