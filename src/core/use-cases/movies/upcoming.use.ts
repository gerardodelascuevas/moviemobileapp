import { HttpAdapter } from "../../../config/adapters/http.adapter";
import { PopularMovieDBResponse } from "../../../infraestructure/movie-db.responses";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../mappers/movie.mapper";

export async function UpcomingMovies(fetcher: HttpAdapter): Promise<Movie[]>{
    try {
        const upcoming = await fetcher.get<PopularMovieDBResponse>('/upcoming'); 
         return upcoming.results.map( MovieMapper.fromMovieDbResultToEntity )

    } catch (error) {
        throw new Error('error en el fetch de upcoming movies')
    }
}