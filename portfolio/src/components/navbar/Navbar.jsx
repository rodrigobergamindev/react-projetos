import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from '../header/header.module.css'

export default function Navbar() {
    return (
        <div>
            <ul className={css.nav}>
                <li className={css.itemMenu}><a href={"#home"}><FontAwesomeIcon icon={faHome} /></a></li>
                    <li className={css.itemMenu}><a href={"#portfolio"}>PORTFOLIO</a></li>
                    <li className={css.itemMenu}><a href={"#servicos"}>SERVIÇOS</a></li>
                    <li className={css.itemMenu}><a href={"#sobre"}>SOBRE</a></li>
                </ul>
        </div>
    )
}
