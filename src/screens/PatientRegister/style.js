import { StatusBar, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

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
    },
    soonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.blue,
    },
    soonIcon: {
        width: '40%',
        height: '65%'
    },
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 7,
        margin: 10,
        backgroundColor: 'rgba(245, 213, 213, 0.33)',
        ...bottomShadow
        // backgroundColor: COLORS.white
    },
    textForm: {
        fontSize: 25,
        fontFamily: FONTS.outfit,
        marginLeft: 20,
    },
    patientFormContainer: {
        flex: 4,
        marginTop: 30,
    },
    responsibleFormContainer: {
        flex: 2,
        paddingTop: 10,
        // backgroundColor: COLORS.darkBlue,
    },
    titleContainer: {
        flexDirection: 'row'
    },
    textSecondForm: {
        fontSize: 15,
        fontFamily: FONTS.outfit,
        marginTop: 10,
        marginLeft: 5,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.pink
    }
});

export default style;