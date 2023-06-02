import {IRes} from "../types";
import {urls} from "../constans";
import {axiosService} from "./axios.service";
import {IGenre, IMovies} from "../interfaces";
import {IVideos} from "../interfaces/IVideos";

const moviesService = {
    getMovies: (page: number = 1): IRes<IMovies> => axiosService.get(urls.basePage, {params: {page}}),
    searchMovie: (title: string): IRes<IMovies> => axiosService.get(`${urls.search}${title}`),
    getGenre: (): IRes<IGenre> => axiosService.get(urls.genre),
    getGenreById: (id: string): IRes<IMovies> => axiosService.get(`${urls.basePage}${urls.genreBuId}${id}`),
    getVideosById: (id: number): IRes<IVideos> => axiosService.get(`${urls.movie}${id}${urls.videos}`)
}

export {
    moviesService
}