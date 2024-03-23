import { Text, View } from "react-native";
import { Movie } from "../../core/entities/movie.entity";
import { ScrollView } from "react-native-gesture-handler";
import MoviePoster from "./moviePoster";

interface Props{
    movies: Movie[]; 
    height?: number;
}

export default function PosterCarrousel({ height = 440, movies}: Props){
    return(
        <View style={{height}}> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
                {movies.map(x=> <MoviePoster key={x.id} movie={x}/> )}
            </ScrollView>
        </View>
    )
}