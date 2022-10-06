import React from 'react';
import style from './card.module.css';
import GenreFinder from './GenreFinder';

function Card({item}) {

    const dateLocal = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
    }

    const addStorage = () => {
        let storedData = window.localStorage.item ? window.localStorage.item.split(",") : [];
        if (!storedData.includes(item.id.toString())) {
            storedData.push(item.id);
            window.localStorage.item = storedData;
        }
        console.log(storedData);
    };

    const deleteSorage = () => {
        let storedData = window.localStorage.item.split(",");
        let newData = storedData.filter((id) => id !== item.id);
        window.localStorage.item = newData;
    }

    return (
        <section className={style.card}>
            <img src={item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "./img/poster.jpg"} alt={`affiche ${item.title}`} />
            <h2> {item.title}</h2>
            <h5> sortie le : {dateLocal(item.release_date)} </h5>
            <h4>{item.vote_average.toFixed(1)}/10 <span>⭐</span></h4>
            <ul>{GenreFinder(item)}</ul>
            {item.overview ? <h3>Synopsis</h3> : ""}
            <p>{item.overwiew}</p>
            {GenreFinder(item) ? (
                <div className={style.btn} onClick={() => addStorage}>
                    Ajouter aux coups de coeur
                </div>
            ) : (
                <div className={style.btn} onClick={() => {
                    deleteSorage();
                    window.location.reload();
                }}>
                    Supprimer de la liste
                </div>
            )}
        </section>
    );
};

export default Card;