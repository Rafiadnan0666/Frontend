import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movie.css';

const Movie = ({ title, vote_count, vote_average, poster, id }) => {
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title} />
      <h3 className="title">{title}</h3>
      <NavLink to={`../detail/${id}`} >{title}</NavLink>
      <p className="vote_count">vote count : {vote_count}</p>
      <p className="vote_average">vote_average : {vote_average}</p>
    </div>
  );
};

export default Movie;