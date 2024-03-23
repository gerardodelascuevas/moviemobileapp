import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RootStackParams } from "../../navigation/Nagigation";
import Header from "../../components/movie/header";
import { useMovie } from "../../hooks/useMovie";
import Details from "../../components/movie/details";

interface Props extends StackScreenProps<RootStackParams, 'Details'>{

}

export default function DetailsScreen({route}:Props){
    const { movieId } = route.params;
    const { isLoading, movie } = useMovie(movieId); 
    if(isLoading){
        return <Text> Is Loading </Text>
    }

    return(
        <View>
            {/* header  */}
            <Header movie={movie} />

            {/* detalles */}
            <Details movie={movie}/>
        </View>
    )
}