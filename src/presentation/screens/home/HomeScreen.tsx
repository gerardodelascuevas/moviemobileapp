import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMovies } from "../../hooks/useMovies";
import PosterCarrousel from "../../components/posterCarrousel";
import { HorizontalCarousel } from "../../components/HorizontalCarousel";

export default function HomeScreen(){
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming, pupularNextPage} = useMovies(); 
    if(isLoading){
        return ( <Text> Cargando ... </Text>)
    }
    
    return(
        <ScrollView>
            <View style={{marginTop: top + 20, paddingBottom: 30, }}>
                {/* Carrusel Principal */}
                <PosterCarrousel movies={nowPlaying}/>

                {/* PELICULAS POPULARES */}
                <HorizontalCarousel movies = { popular} title="Populares" 
                loadNextPage={pupularNextPage}
                />

                {/* PELICULAS Mejor calificadas */}
                <HorizontalCarousel movies = { topRated } title="Mejor Calificadas"/>

                {/* PELICULAS proximas */}
                <HorizontalCarousel movies = { upcoming} title="Próximamente"/>

            
            </View>
            <Text> Home Screensss </Text>
        </ScrollView>
    )
}