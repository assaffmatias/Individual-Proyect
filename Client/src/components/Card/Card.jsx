import style from './Card.module.css';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <Link to={`/detail/${props.id}`}>
                <img src={props.image} alt="" className={style.img} />
            </Link>
        </>

            

        
    )
}

export default Card;