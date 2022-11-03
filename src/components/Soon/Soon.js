import { Image, StyleSheet, View } from "react-native";

import soon from "../../assets/icons/soon.png";

export const Soon = ({ width, height }) => {

    return (
        <View style={style.soonContainer}>
            <Image
                source={soon}
                style={{width, height}}
            />
        </View>
    )
}

const style = StyleSheet.create({
    soonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})