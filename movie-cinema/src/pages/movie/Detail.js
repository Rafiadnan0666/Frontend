import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../Api"; 

const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData = await getDetailMovie(id);
                setMovie(movieData);
            } catch (error) {
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const { title, overview, poster_path } = movie;

    return (
        <div>
            <h1>Detail</h1>
            <h3>Title: {title}</h3>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
            <p>Overview: {overview}</p>
        </div>
    );
};

export default Detail;
