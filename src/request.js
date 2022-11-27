const API_KEY = "c589c75a755fca8fa78d43752b264173";

const request = {
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals : `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `https://api.themoviedb.org/3/dicover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default request;