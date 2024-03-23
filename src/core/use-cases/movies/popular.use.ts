import { HttpAdapter } from "../../../config/adapters/http.adapter";
import { PopularMovieDBResponse } from "../../../infraestructure/movie-db.responses";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../mappers/movie.mapper";

interface Options {
    page?: number; 
    limit?: number;
}

export async function PopularUseCase(fetcher: HttpAdapter, options?: Options): Promise<Movie[]>{
    try {
        const popular = await fetcher.get<PopularMovieDBResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        }); 
         return popular.results.map( MovieMapper.fromMovieDbResultToEntity )

    } catch (error) {
        throw new Error('error en el fetch de popular movies')
    }
}