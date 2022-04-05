import React from "react";
import './Mon_an.css';
const Mon_an = (props) => {
    return(
        <>
        <div className={props.class}>
            {props.ten}
        </div>
        </>
    )
}
export default Mon_an;