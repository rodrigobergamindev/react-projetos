import React from 'react'
import css from '../header/header.module.css'
import avatar from '../../images/avatar.jpg'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';



export default function Header() {
    
    return (
        <div className={css.menu}>
            <div className={css.avatar}>
                <img src={avatar} alt="avatar" className={css.perfil}/>
                <h1 className={css.title}>Lídia Martins</h1>
                <h2 className={css.subtitle}>MAKEUP ARTIST</h2>
            </div>

            <div className={css.bar}></div>

        <div>
        <ul className={css.nav}>
                    <li className={css.socialIcon}><a href={"https://www.facebook.com/limartinsmakeup"} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className={css.socialIcon}><a href={"https://br.pinterest.com/lidia8martins/make/"} target="_blank"><FontAwesomeIcon icon={faPinterest} /></a></li>
                    <li className={css.socialIcon}><a href={"https://www.instagram.com/lidia_martinns/"} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li className={css.socialIcon}><a href={"https://api.whatsapp.com/send?phone=551194004-2911&text=Gostaria%20de%20mais%20informações%20!"} target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        </ul>
        </div>
        
        </div>
    )
}
