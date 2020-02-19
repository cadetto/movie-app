import React ,{useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import './App.scss';


function App() {

  const [movieData,setMovieData] = useState([]);

  const getTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    setMovieData(json.results);    
  } 



  useEffect(() => {
    getTrendingMovies();
  })

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="columns is-multiline">
          {movieData.map((movie) => {
            return(
              <div className="column is-one-quarter">
                <Movie movieData={movie} />
              </div>
              
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
