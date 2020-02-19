import React from 'react';

const Movie = ({movieData}) => {
    return(
        <div className="movie">
            <h1>{movieData.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt=""/>
        </div>
    )
}

export default Movie;