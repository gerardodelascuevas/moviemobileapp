import { HttpAdapter } from "../../../config/adapters/http.adapter";
import { MovieDBMovie } from "../../../infraestructure/movie-db.responses";
import { FullMovie } from "../../entities/movie.entity";
import { MovieMapper } from "../../mappers/movie.mapper";

export async function getMoviesByIdUseCase(fetcher:HttpAdapter, movieId: number):Promise<FullMovie>{

    try {
        //fetcher
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)

        const fullMovie = MovieMapper.fromMovieDbToEntity(movie);

        return fullMovie; 
        
    } catch (error) {
        throw new Error('Cannot get movie by id movie' )
    }
}