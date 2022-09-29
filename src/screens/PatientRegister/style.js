import { StatusBar, StyleSheet } from "react-native";


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
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 8,
        margin: 10,
        backgroundColor: 'rgba(245, 213, 213, 0.33)',
        ...bottomShadow,
    }, 
    formsContainer: {
        flex: 8,
    },
    patientFormContainer: {
        height: 370,
        marginTop: 20,
    },
    responsibleFormContainer: {
        paddingTop: 10,
        height: 180,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
    }
});

export default style;