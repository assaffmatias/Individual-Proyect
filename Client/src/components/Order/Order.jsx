import style from './Order.module.css'
import { useDispatch } from 'react-redux';
import { orderDrivers } from '../../redux/actions';

const Order = () => {
    const dispatch = useDispatch()

    const handleOrder = (value) => {
        // const value = event.target.value;
        value === 'default' ? dispatch(orderDrivers())
        : dispatch(orderDrivers(value));
    };

    return (
        <>
            {/* <div className={style.ordered} onClick={() => handleOrder("default")}>Default</div> */}
            <div className={style.ordered} onClick={() => handleOrder("nameUpward")} role='button'>Name Upward</div>
            <div className={style.ordered} onClick={() => handleOrder("nameFalling")} role='button'>Name Falling</div>
            <div className={style.ordered} onClick={() => handleOrder("dobUpward")} role='button'>Date Upward</div>
            <div className={style.ordered} onClick={() => handleOrder("dobFalling")} role='button'>Date Falling</div>
        </>
    )
}

export default Order;