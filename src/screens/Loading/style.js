import { StyleSheet } from "react-native";

import { FONTS } from "../../assets/const";


const style = StyleSheet.create({
    loadingContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    text: {
        fontSize: 14,
        fontFamily: FONTS.title
    }
})

export default style; 