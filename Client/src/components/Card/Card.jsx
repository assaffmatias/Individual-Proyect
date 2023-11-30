import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={style.divContainer}>
            <img src={props.image} alt="" className={style.img} />
            <div className={style.contain}>
                <Link to={`/detail/${props.id}`}>
                    <button className={style.button} >{props.name} Info</button>
                </Link>
            </div>
        </div >
    )
}

export default Card;