import { MovieDBMovie, Result } from "../../infraestructure/movie-db.responses";
import { FullMovie, Movie } from "../entities/movie.entity";

export class MovieMapper {
    static fromMovieDbResultToEntity(result: Result): Movie{
        return {
            id: result.id, 
            title: result.title, 
            description: result.overview, 
            realeseDate: new Date(result.release_date), 
            rating: result.vote_average, 
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }

    static fromMovieDbToEntity( movie: MovieDBMovie): FullMovie {
        return {
            id: movie.id, 
            title: movie.title, 
            description: movie.overview, 
            realeseDate: new Date(movie.release_date), 
            rating: movie.vote_average, 
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(x=> x.name), 
            duration: movie.runtime, 
            budget: movie.budget,
            originalTitle: movie.original_title, 
            productionCompanies: movie.production_companies.map(x=> x.name),
        }
    }
}