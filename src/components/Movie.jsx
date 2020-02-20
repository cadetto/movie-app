import React from 'react';

const Movie = ({movieData,genreList}) => {
    const movieGenres = genreList.filter( genre => movieData.genre_ids.includes(genre.id)) ;

    return(
        <div className="movie">
            <img className="moviePoster" src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt=""/>
            <div className="movieInfo">
                <h3 className="movieTitle">{movieData.title}</h3>
                <div className="movieText">
                    {movieData.overview.split(" ").splice(0,20).join(" ")}...
                    <br/>
                    <br/>
                    {movieGenres.map( (id) => <span>{id.name} </span>)}
                </div>
                <div className="readMore">Read More</div>
            </div>

        </div>
    )
}

export default Movie;