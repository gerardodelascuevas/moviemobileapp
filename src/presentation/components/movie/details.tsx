import { Text, View } from "react-native";
import { FullMovie } from "../../../core/entities/movie.entity";
import { Formater } from "../../../config/helpers/format";

interface Props {
    movie: FullMovie;
}

export default function Details({ movie }: Props){
    return(
        <>
            <View style={{marginHorizontal: 20}}> 
                <View style={{flexDirection: 'row'}}>
                    <Text> {movie.rating}</Text> 
                    <Text style={{marginLeft: 5}}> - { movie.genres.join(', ') } </Text>
                    
                </View>
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}> 
                        Historia
                    </Text>
                    <Text style={{fontSize: 16}}> { movie.description } </Text>

                    <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}> {Formater.currency(movie.budget)} </Text>
            </View>
        </>
    )
}