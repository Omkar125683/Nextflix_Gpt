import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import {addUpComingMovies} from '../utils/moviesSlice'

const useUpcoming = async() => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.addUpComingMovies);

  const getPopularMovies = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    //   API_OPTIONS
    // );
    // const json = await data.json();
    // dispatch(addUpComingMovies(json.results));
    // console.log(json);
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGJhNjllNGRjMGJlNjg3Y2Y3MTY0Njg2YTQxMzg4MiIsIm5iZiI6MTcyMjM0MzgzNC4wMTgxMzgsInN1YiI6IjY2N2UxODFkYTUwNGY3NDdjMmRjZWI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zd7wZIpBLbX7bteQjlrxilZ-ib_zG2-_3vUe79OOiSM'
  }
};
const data = await fetch(url,options);
const json= await data.json();
console.log(json);
  };

  useEffect(() => {
     getPopularMovies();
  }, []);
};

getPopularMovies();


export default useUpcoming;
