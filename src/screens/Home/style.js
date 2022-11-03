import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../assets/const";


const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 5,
}

const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: StatusBar.currentHeight,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 380,
        height: 350,
        backgroundColor: COLORS.whiteLight,
        borderRadius: 5,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 30,
    },
});

export default style;