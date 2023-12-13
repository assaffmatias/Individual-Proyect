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
    const [perPage, setPerPage] = useState(3) 


    const filteredDrivers = drivers.filter((driver) => {
        const meetsCreationFilter = filterCreated === null || driver.created === filterCreated;
        const meetsTeamFilter = !selectedTeam || (driver.teams && driver.teams.includes(selectedTeam));
    
        return meetsCreationFilter && meetsTeamFilter;
    });

    return (
        <>
        <section className={style.slider}>
            {/* <FilteredCards /> */}
            {filteredDrivers
                .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                .map(driver => {
                    
                    return (
                            <Card
                                id={driver.id}
                                name={driver.name}
                                surname={driver.surname}
                                image={driver.image}
                                teams={driver.teams}
                            />
                    )
                })}
            <div>
            </div>

        </section>
                <Paginated page={page} setPage={setPage} />
        </>
    )

}

export default CardsContainer;