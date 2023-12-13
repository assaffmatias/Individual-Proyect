import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { getDriverById } from '../../redux/actions';
import style from './Detail.module.css'

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    const driverDetail = useSelector((state) => state.driverDetail)

    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        dispatch(getDriverById(id))
    }, [id])


    const handleInfoClick = () => {
        setShowInfo(true);
    };

    const handleDescriptionClick = () => {
        setShowInfo(false);
    };

    return (
        <div>
            {driverDetail
                .map((driver) => {
                    return (
                        <div className={style.container}>
                            <div className={style.divImg}>
                                <img className={style.img} src={driver.image} alt="" />
                            </div>

                            <div className={style.info} key={driver.id}>
                                <h1 className={style.h1}>{driver.name} {driver.surname}</h1>
                                <div className={style.description}>
                                    <button className={style.button} onClick={handleInfoClick}>Info</button>
                                    <button className={style.button} onClick={handleDescriptionClick}>Descripción</button>
                                </div>
                                <div className={style.show}>
                                    {showInfo ? (
                                        <div>
                                            <p>Nationality: {driver.nationality}</p>
                                            <p>Date of Birth: {driver.dob}</p>
                                            <p>Teams: {driver.teams}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>{driver.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Detail;