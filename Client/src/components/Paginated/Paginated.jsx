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
                {/* <button className={style.button} disabled={page === 1} onClick={prevPage}>Prev</button> */}
                {/* <button className={style.button} onClick={nextPage}>Next</button> */}
                <button className={style.prev} disabled={page === 1} onClick={prevPage}>
                    <svg className={style.svgIcon} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
                <button className={style.next} onClick={nextPage}>
                    <svg className={style.svgIcon} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Paginated
