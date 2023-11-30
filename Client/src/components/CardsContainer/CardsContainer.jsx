import Card from "../Card/Card"
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css"
import { useState } from "react";
import Paginated from "../Paginated/Paginated";
import FilteredCards from "../FilteredCards/FiteredCards";

const CardsContainer = () => {

    const drivers = useSelector(state => state.drivers);
    const filterCreated = useSelector((state) => state.filterCreated);
    const selectedTeam = useSelector(state => state.selectedTeam)

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9) 


    const filteredDrivers = drivers.filter((driver) => {
        const meetsCreationFilter = filterCreated === null || driver.created === filterCreated;
        const meetsTeamFilter = !selectedTeam || (driver.teams && driver.teams.includes(selectedTeam));
    
        return meetsCreationFilter && meetsTeamFilter;
    });

    return (
        <div className={style.divContainer}>
            <FilteredCards />
            {filteredDrivers
                .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                .map(driver => {
                    
                    return (
                        <div key={driver.id} className={style.card}>
                            <Card
                                id={driver.id}
                                name={driver.name}
                                surname={driver.surname}
                                image={driver.image}
                                teams={driver.teams}
                            />
                        </div>
                    )
                })}
            <div>
                <Paginated page={page} setPage={setPage} />
            </div>

        </div>
    )

}

export default CardsContainer;