import React from 'react';
import style from './card.module.css';
import GenreFinder from './GenreFinder';

function Card({item}) {

    const dateLocal = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
    }

    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < item.genre_ids.length; i++) {
          switch (item.genre_ids[i]) {
            case 28:
              genreArray.push(`Action`);
              break;
            case 12:
              genreArray.push(`Aventure`);
              break;
            case 16:
              genreArray.push(`Animation`);
              break;
            case 35:
              genreArray.push(`Comédie`);
              break;
            case 80:
              genreArray.push(`Policier`);
              break;
            case 99:
              genreArray.push(`Documentaire`);
              break;
            case 18:
              genreArray.push(`Drame`);
              break;
            case 10751:
              genreArray.push(`Famille`);
              break;
            case 14:
              genreArray.push(`Fantasy`);
              break;
            case 36:
              genreArray.push(`Histoire`);
              break;
            case 27:
              genreArray.push(`Horreur`);
              break;
            case 10402:
              genreArray.push(`Musique`);
              break;
            case 9648:
              genreArray.push(`Mystère`);
              break;
            case 10749:
              genreArray.push(`Romance`);
              break;
            case 878:
              genreArray.push(`Science-fiction`);
              break;
            case 10770:
              genreArray.push(`Téléfilm`);
              break;
            case 53:
              genreArray.push(`Thriller`);
              break;
            case 10752:
              genreArray.push(`Guerre`);
              break;
            case 37:
              genreArray.push(`Western`);
              break;
            default:
              break;
          }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>);
      };

    const addStorage = () => {
        let storedData = window.localStorage.items ? window.localStorage.items.split(",") : [];
        if (!storedData.includes(item.id.toString())) {
            storedData.push(item.id);
            window.localStorage.items = storedData;
        }
        console.log(storedData);
    };

    const deleteSorage = () => {
        let storedData = window.localStorage.item.split(",");
        let newData = storedData.filter((id) => id != item.id);
        window.localStorage.items = newData;
    };

    return (
        <section className={style.card}>
            <img src={item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "./img/poster.jpg"} alt={`affiche ${item.title}`} />
            <h2> {item.title}</h2>
            <h5> sortie le : {dateLocal(item.release_date)} </h5>
            <h4>{item.vote_average.toFixed(1)}/10 <span>⭐</span></h4>
            <ul>
                {item.genre_ids
                    ? genreFinder()
                    : item.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
                </ul>
            {item.overview ? <h3>Synopsis</h3> : "Pas de Synopsis"}
            <p>{item.overview}</p>
            {item.genre_ids ? (
                <div className={style.btn} onClick={() => addStorage()}>
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