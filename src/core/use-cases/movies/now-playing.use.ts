import { HttpAdapter } from "../../../config/adapters/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/movie-db.responses";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../mappers/movie.mapper";

export async function NowPlayingUseCase(fetcher: HttpAdapter): Promise<Movie[]>{
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing'); 
        console.log({nowPlaying})
         return nowPlaying.results.map( MovieMapper.fromMovieDbResultToEntity )

    } catch (error) {
        throw new Error('error en el fetch de movies')
    }
}