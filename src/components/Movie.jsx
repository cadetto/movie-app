import React from 'react';

const Movie = ({movieData,genreList}) => {
    const movieGenres = genreList.filter( genre => movieData.genre_ids.includes(genre.id)) ;

    return(
        <div className="movie">
            <h1>{movieData.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt=""/>
            {movieGenres.map( (id) => <p>{id.name}</p>)}
        </div>
    )
}

export default Movie;