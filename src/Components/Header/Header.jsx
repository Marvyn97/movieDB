import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css'

const Header = () => {
    return (
        <section className={style.header}>
            <h1>MovieDB</h1>
            <nav>
                <ul>
                    <NavLink to= "/" ><li>Accueil</li></NavLink>
                    <NavLink to= "coup-de-coeur"><li>Coup de coeur</li></NavLink>
                </ul>
            </nav>
        </section>
    );
}

export default Header;