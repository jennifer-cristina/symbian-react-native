import { Text, View } from "react-native";

import style from "./style";

export const Loading = () => {

    return (
        <View style={style.loadingContainer}>
            <Text style={style.text}>CARREGANDO...</Text>
        </View>
    );
}

