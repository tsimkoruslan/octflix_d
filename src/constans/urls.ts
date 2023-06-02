const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500/';
const backgroundImage = 'https://image.tmdb.org/t/p/original';
const urls = {
    basePage: '/discover/movie',
    genre: '/genre/list',
    search: '/search/movie?query=',
    genreBuId: '?with_genres=',
    infoById: '/movie/',
    page: '?page=',
    movie: '/movie/',
    videos: '/videos'
}


export {
    baseURL,
    posterURL,
    urls,
    backgroundImage
}