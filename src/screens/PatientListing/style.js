import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../assets/const";

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
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flex: 5,
        backgroundColor: COLORS.whiteLight,
        margin: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    patientsContainer: {
        flex: 1,
        marginTop: 20,
        margin: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default style;