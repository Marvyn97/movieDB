import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css'

const Header = () => {
    return (
        <section className={style.header}>
           <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(nav) => (nav.isActive ? style.nav_active : "")}
                        >
                        Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/coups-de-coeur"
                            className={(nav) => (nav.isActive ? style.nav_active : "")}
                        >
                            Coups de coeur
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1>React Movies</h1>
        </section>
    );
}

export default Header;