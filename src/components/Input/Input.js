import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const Input = ({ iconName, placeholder }) => {

    return (
        <View style={style.inputContainer}>

            <FontAwesome
                name={iconName}
                style={style.icon}
            />

            <TextInput
                style={style.input}
                placeholder={placeholder}
            />

        </View>
    );
}

const style = StyleSheet.create({
    inputContainer: {
        width: '95%',
        height: 85,
        position: 'relative',
        padding: 5,
        marginLeft: 10,
    },
    icon: {
        position: 'absolute',
        top: 25,
        right: 20,
        fontSize: 22,
        color: COLORS.black,
        marginRight: 10,
        zIndex: 2
    },
    inputText: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 10,

    },
    input: {
        width: '100%',
        height: 55,
        borderWidth: 2,
        borderRadius: 13,
        borderColor: COLORS.white,
        borderBottomColor: COLORS.red,
        backgroundColor: COLORS.white,
        color: COLORS.black,
        padding: 10,
        fontSize: 17,
    },
    errorInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.red,
        padding: 10,
        fontSize: 17,
    },
    errorIcon: {
        position: 'absolute',
        top: 12,
        right: 10,
        fontSize: 22,
        color: COLORS.red,
        marginRight: 10,
    },
    errorText: {
        color: COLORS.red,
        marginLeft: 10
    }
});

