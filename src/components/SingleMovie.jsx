import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';


const SingleMovie = (props) => {

    const [movieDetails, setMovieDetails] = useState({});
    const {movieId}= useParams();


    useEffect(() => {
        
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            const json = await response.json();
            setMovieDetails(json);
        }

        fetchMovieDetails();
    },[movieId]);

    return(
    <h1 className="title">{movieDetails.original_title}</h1>
    )

}

export default SingleMovie;