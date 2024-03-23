import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { Movie } from "../../core/entities/movie.entity";
import { FlatList } from "react-native-gesture-handler";
import { MovieMapper } from "../../core/mappers/movie.mapper";
import MoviePoster from "./moviePoster";
import { useEffect, useRef } from "react";

interface Props {
    movies: Movie[];
    title?: string; 
    loadNextPage?: ()=> void; 
}

export function HorizontalCarousel({ movies, title, loadNextPage }: Props){

    const isLoading = useRef(false); 

    useEffect(()=> {
        setTimeout(()=> {
            isLoading.current = false; 
        }, 500)        
    }, [movies])

    function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>){
        if(isLoading.current) return; 

        const {contentOffset, layoutMeasurement, contentSize } = e.nativeEvent
        const isEndReach = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        
        if(!isEndReach) return; 
        else {
            //CARGAR PELICULAS
           isLoading.current = true

            //CARGA DE SIGUIENTES PELICULAS 
            loadNextPage && loadNextPage()
        }
    }

    return(
        <View 
            style={{ height: title ? 260: 220 }}
        > 
         {   title && (
            <Text 
            style={{
                fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 
            }}
            > { title } </Text>
         )}

         <FlatList 
            data={movies}
            renderItem={ ({ item })=> (
                <MoviePoster movie={ item } width={140} height={200} />
            )}
            keyExtractor={(item, index)=> `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator = {false}
            onScroll={ onScroll }
         /> 
        </View>
    )
}