import React ,{useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import SingleMovie from './components/SingleMovie';
import './App.scss';


function App() {

  const [movieData,setMovieData] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const getTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    setMovieData(json.results);    
  } 

  const getGenreList = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const json = await response.json();
    setGenreList(json.genres);
  }

  useEffect(() => {
    getTrendingMovies();
    getGenreList();
  },[])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        
        <Route exact path="/">
          <div className="container">
            <div className="columns is-multiline movieContainer">
              <div class="column is-full">
                <h1 class="title">Trending movies</h1>
              </div>
              {movieData.map((movie) => {
                return(
                  <div className="column is-half">
                    <Movie movieData={movie} genreList={genreList} />
                  </div>
                )
              })}
            </div>
          </div>
        </Route>

        <Route path="/movie/:movieId" component={SingleMovie} />

      </Switch>
          
    </div>
  );
}

export default App;
