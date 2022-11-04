import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import style from './form.module.css';

const Form = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null);

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=05fa9fb0d4295b391192426b93e9322b&query=${search}&language=fr-FR`
          )
          .then((res) => setMoviesData(res.data.results));
      }, [search]);


  //console.log(moviesData);

      
    return (
        <section className={style.form_component}>
            <div className={style.form_container}>
                <form>
                    <input type='text'
                    placeholder="saisir un film" 
                    id={style.search_input}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <input type="submit" value="Rechercher" /> */}
                </form>
                <div className={style.btn_sort_container}>
                    <div className={style.btn_sort}
                    id={style.goodToBad}
                    onClick={() => setSortGoodBad('goodToBad')}
                    >
                    Top<span>➜</span>  
                    </div>
                    <div className={style.btn_sort}
                    id={style.badToGood}
                    onClick={() => setSortGoodBad('badToGood')}
                    >
                    Flop<span>➜</span>  
                    </div>
                </div>
            </div>
            <div className={style.result}>
                {moviesData.slice(0, 12).sort((a, b) => {
                    if (sortGoodBad === "goodToBad") {
                        return b.vote_average - a.vote_average;
                    } else if (sortGoodBad === "badToGood") {
                        return a.vote_average - b.vote_average;
                    }
                })
                .map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </div>
        </section>
    );
};

export default Form;