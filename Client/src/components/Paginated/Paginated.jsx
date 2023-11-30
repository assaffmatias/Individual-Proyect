import React, { useState } from "react";
import style from "./Paginated.module.css";

const Paginated = ({ page, setPage }) => {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(input + 1);
        setPage(page + 1);
    }

    const prevPage = () => {
        setInput(input - 1);
        setPage(page - 1);
    }

    return (
        <div className={style.divContainer}>
            <div className={style.divButton}>
                <button className={style.button} disabled={page === 1} onClick={prevPage}>Prev</button>
                <button className={style.button} onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default Paginated
