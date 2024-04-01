import axios from "axios";

const ApiKey = "8e465ff28280979967a70c1462d19f7f";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: ApiKey },
});

export const getMovieList = async () => {
    const response = await apiClient.get("/movie/popular");
    return response.data.results;
};

export const getMovieListPop = async () => {
    const response = await apiClient.get("/movie/popular");
    return response.data.results;
};

export const getMovieListTop = async () => {
    const response = await apiClient.get("/movie/top_rated");
    return response.data.results;
};

export const getDetailMovie = async (id) => {

    const response = await apiClient.get(`/movie/${id}`);
    return response.data;
};

