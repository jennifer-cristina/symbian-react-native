import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../../assets/const";


export const ButtonRegister = ({ label, onPress }) => {

    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={style.button}
        >
            <Text style={style.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    button: {
        width: '40%',
        height: '55%',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 40,
        backgroundColor: COLORS.marsala,
        ...bottomShadow
    },
    text: {
        color: COLORS.white
    }
});

