import React, { useEffect, useState } from "react";
import Movie from "../../component/Movie/Movie";
import { getMovieListTop } from "../../Api";
import "./../../component/Movies/Movies.css";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMovieListTop();
        setMovies(result);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>TopRated</h1>
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
      </div>
    </div>
  );
};

export default TopRated;