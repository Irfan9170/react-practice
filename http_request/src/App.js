import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const [isLoading,setLoading]= useState(false);
  const [err,setErr]= useState(null);

  const onclickHandler= async()=>{

try {
  
  setLoading(true);
  setErr(null);
   const response=await fetch('https://swapi.dev/api/films/');
   if(!response.ok){
     throw new Error("Something went wrong")
   }
   const data =  await response.json();
   const fecthData = data.results.map((movie)=>{
     return {
       id:movie.episode_id,
       title:movie.title,
       openingText:movie.opening_crawl,
       releaseDate:movie.release_date
     }
   })
   setLoading(false);
  setMovies(fecthData)
} catch (error) {
  setErr(error.message);
  setLoading(false)
}

  }
  return (
    <React.Fragment>
      <section>
        <button onClick={onclickHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
        {movies.length===0 && !isLoading && !err && <p>No Movies Found</p>}
        {isLoading && <p>Loading..</p>}
        {!isLoading && err && <p>{err}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
