import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const [getpopoular, setpopular] = useState(null);
  const [upcoming,setupcoming ] = useState(null);
  const gemoviesdata = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
    const json =await data.json()
    setpopular(json);
    // console.log(json);
  }
  const newmovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
    const json =await data.json()
    setupcoming(json);

    
  }
 useEffect(()=>{
  gemoviesdata(),
  newmovies() 
 },[]);


  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.getpopoular} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          {/* <MovieList title={"Horror"} movies={movies.upcoming} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
