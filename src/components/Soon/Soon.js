import { Image, StyleSheet, View } from "react-native";

import soon from "../../assets/icons/soon.png";

export const Soon = ({ }) => {

    return (
        <View style={style.soonContainer}>
            <Image
                source={soon}
                style={style.soonIcon}
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
    soonIcon: {
        width: '35%',
        height: '70%'
    },
})