import style from './Order.module.css'
import { useDispatch } from 'react-redux';
import { orderDrivers } from '../../redux/actions';

const Order = () => {
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        const value = event.target.value;
        dispatch(orderDrivers(value));
    };

    return (
        <>
            <select className={style.select} onChange={handleOrder}>
                <option value="default">Default</option>
                <option value="nameUpward">Name Upward</option>
                <option value="nameFalling">Name Falling</option>
                <option value="dobUpward">Date of Birth Upward</option>
                <option value="dobFalling">Date of Birth Falling</option>
            </select>
        </>
    )
}

export default Order;