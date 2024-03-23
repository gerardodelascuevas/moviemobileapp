import { useEffect, useState } from "react"
import * as useCases from '../../core/use-cases/index';
import { movieDbFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";

export const useMovie = (movieId:number)=> {
    const [isLoading, setIsLoading] = useState(true); 
    const [movie, setMovie] = useState<FullMovie>(); 

    useEffect(()=> {
        loadMovie()
    }, [movieId]); 

    async function loadMovie(){
        setIsLoading(true); 
        const fullMovie = await useCases.getMoviesByIdUseCase(movieDbFetcher, movieId); 
        setMovie(fullMovie); 
        setIsLoading(false);
    }

    return {
        isLoading, movie
    }
}