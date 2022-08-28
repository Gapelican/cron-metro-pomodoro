import { type } from "@testing-library/user-event/dist/type";
import React, { Children } from "react";
import style from './Botao.module.scss';

interface props {
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode
    onClick?: () => void,
}

export default function Botao(props:props) {            
    const {type, children, onClick} = props
    
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )

}



