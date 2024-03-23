import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases/index'
import { movieDbFetcher } from "../../config/adapters/movieDB.adapter"

let popularPage = 1; 

export const useMovies = ()=> {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRateg] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(()=> {
        initialLoad()
    }, [])

    const initialLoad = async()=> {
       const nowPlayingPromise = await UseCases.NowPlayingUseCase(movieDbFetcher);
       const popularPromise = await UseCases.PopularUseCase(movieDbFetcher);
       const topRatedPromise = await UseCases.TopRatedMovies(movieDbFetcher);
       const upcomingPromise = await UseCases.UpcomingMovies(movieDbFetcher);
      
       const [nowPlayingMovies, popularMovies, 
        topRatedMovies, upcomingMovies
    ] = await Promise.all([
        nowPlayingPromise, 
        popularPromise, 
        topRatedPromise, 
        upcomingPromise
    ])
    setNowPlaying(nowPlayingMovies); 
    setPopular(popularMovies);
    setTopRateg(topRatedMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);

   
    }    
    return { isLoading, nowPlaying, popular, topRated, upcoming, 
    //METODOS
    pupularNextPage: async()=> {
        popularPage++
        const popularMovies = await UseCases.PopularUseCase( movieDbFetcher, {
            page: popularPage, 

        } )
        setPopular((prev)=> [...prev, ...popularMovies ]);
    }
    }
}