import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';


const SingleMovie = (props) => {



    const [movieDetails, setMovieDetails] = useState({
        'genres':[]
    });
    const {movieId}= useParams();

    const backdropMovie = {
        backgroundImage:`linear-gradient(
            rgba(0,0,0,0.70),
            rgba(0,0,0,0.70)
        ), url(https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center'
    };

    useEffect(() => {
        
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            const json = await response.json();
            setMovieDetails(json);
        }

        fetchMovieDetails();
    },[movieId]);

    return(
        <div className="hero is-fullheight-with-navbar" style={backdropMovie}>
            <div className="hero-body">
                <div className="singleMovieInfo">
                    <div className="singleMoviePoster">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt=""/>
                    </div>
                    <div className="singleMovieText">
                        <h1 className="SingleMovieTitle">{movieDetails.title}</h1>
                        <p>{movieDetails.overview}</p>
                        <br />
                        <p>{movieDetails.genres.map(genre => genre.name + ' ')} </p>
                    </div>

                </div>
            </div>

        </div>
   
    )

}

export default SingleMovie;