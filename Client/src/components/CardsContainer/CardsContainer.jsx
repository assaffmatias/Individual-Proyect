import Card from "../Card/Card"
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css"
import { useState } from "react";
import Paginated from "../Paginated/Paginated";
import Filter from "../Filter/Filter"
import Order from "../Order/Order";

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
        <div className={style.container}>

            <div className={style.contain}>
                <div className={style.filter}>
                    <h1 className={style.h1}>Filter by</h1>
                    <Filter />
                </div>

                <div className={style.section}>
                    <section className={style.slider}>
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
                    </section>
                </div>

                <div className={style.order}>
                    <h1 className={style.h1}>Order by</h1>
                    <Order />
                </div>
            </div>


            <div className={style.paginated}>
                <Paginated page={page} setPage={setPage} />
            </div>

        </div>
    )

}

export default CardsContainer;