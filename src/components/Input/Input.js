import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const Input = ({
    iconName,
    placeholder,
    onChangeText,
    onBlur,
    value,
    hasError,
    errorMessage }) => {

    return (
        <View style={style.inputContainer}>

            <View>
                <FontAwesome
                    name={hasError ? "times-circle" : iconName}
                    style={hasError ? style.errorIcon : style.icon}
                />
                <TextInput
                    style={hasError ? style.errorInput : style.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />
                {hasError && (
                    <Text style={style.errorText}>
                        {errorMessage}
                    </Text>
                )}
            </View>

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
        top: 15,
        right: 18,
        fontSize: 20,
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
        borderBottomColor: COLORS.red,
        backgroundColor: COLORS.white,
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
        zIndex: 2,
    },
    errorText: {
        color: COLORS.red,
        marginLeft: 10
    }
});

