import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getDriverById } from '../../redux/actions';
import style from './Detail.module.css'

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    const driverDetail = useSelector((state) => state.driverDetail)

    useEffect(() => {
        dispatch(getDriverById(id))
    }, [id])

    return (
        <div>
            {driverDetail
            .map((driver) => {
                return (
                    <div className={style.divContainer}>
                    <div className={style.divContainer}>
                        <img className={style.img} src={driver.image} alt="" />
                    </div>

                    <div className={style.info} key={driver.id}>
                        <h2>{driver.name} {driver.surname}</h2>
                        <h2>{driver.nationality}</h2>
                        <h2>{driver.dob}</h2>
                        <h2>{driver.teams}</h2>
                    </div>
                    <div className={style.description}>
                        <h3>{driver.description}</h3>
                    </div>
                </div>
                )
            })
            }
        </div>
    )
}

export default Detail;