import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import style from './favorite.module.css';

const Favorite = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
      let moviesId = window.localStorage.movies 
      ? window.localStorage.movies.split(",")
      : [];
    
      for (let i = 0; i < moviesId.lenght; i++) {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=05fa9fb0d4295b391192426b93e9322b&language=fr-FR`
            )
            .then((res) => setListData((listData) => [...listData, res.data]));
        }
        console.log(`moviesId dans favorite ==> ${moviesId}`);
    }, []);

    
    return (
        <div className={style.user_list_page}>
            <Header />
            <h2>
                Coups de coeur <span>💖</span>
            </h2>
            <div className={style.result}>
                {listData.length > 0 ? (
                    listData.map((movie) => <Card movie={movie} key={movie.id} /> )
                ) : (
                    <h2>Aucun coup de coeur pour le moment</h2>
                )}
            </div>
        </div>
    );
};

export default Favorite;