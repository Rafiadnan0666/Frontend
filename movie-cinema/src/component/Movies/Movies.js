import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import Counter from "../Counter/Counter.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../Api.js";
const Movies = () => {


  const [nama, setNama] = useState("Ucup");

  console.log(nama);


  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "https://picsum.photos/200",
      genre: "Avanger",
    };
    setMovies([...movies, movie]);
    // setNama("Budi");
  };

  useEffect(()=>{
    getMovieList().then((result) =>
    setMovies(result))
  }, [])
  
  const addMovie = (movie) => {
    setMovies([...movies,movie])
  }

  console.log(movies);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {movies.map((data) => {
          return (
            <Movie
            id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
              vote_average={data.vote_average}
              vote_count={data.vote_count}
            />
          );
        })}
        {/* <button onClick={handleClick}>Add Movie</button> */}
        {/* <Counter/> */}
      </div>
      <AddMovieForm onAddMovie={addMovie}/>
    </div>
  );
};

export default Movies;