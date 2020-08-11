import React from 'react'
import css from '../header/header.module.css'
import avatar from '../../images/avatar.png'
import iconHome from '../../images/icon-home.png'


export default function Header() {
    return (
        <div className={css.menu}>
            <div>
                <ul className={css.nav}>
                    <li className={css.itemMenu}><img src={iconHome} alt="avatar" className={css.icon}/></li>
                    <li className={css.itemMenu}>PORTFOLIO</li>
                    <li className={css.itemMenu}>SERVIÇOS</li>
                    <li className={css.itemMenu}>SOBRE</li>
                    <li className={css.itemMenu}>CONTATO</li>
                </ul>
            </div>

            <div className={css.avatar}>
                <img src={avatar} alt="avatar" className={css.perfil}/>
            </div>

        </div>
    )
}
