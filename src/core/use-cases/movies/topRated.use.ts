import { HttpAdapter } from "../../../config/adapters/http.adapter";
import { PopularMovieDBResponse } from "../../../infraestructure/movie-db.responses";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../mappers/movie.mapper";

export async function TopRatedMovies(fetcher: HttpAdapter): Promise<Movie[]>{
    try {
        const popular = await fetcher.get<PopularMovieDBResponse>('/top_rated'); 
         return popular.results.map( MovieMapper.fromMovieDbResultToEntity )

    } catch (error) {
        throw new Error('error en el fetch de popular movies')
    }
}