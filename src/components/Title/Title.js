import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FONTS } from "../../assets/const";


export const Title = ({ title, label }) => {

    return (
        <View style={style.titleContainer}>
            <Text style={style.textForm}>{title}</Text>
            <Text style={style.textSecondForm}>{label}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row'
    },
    textForm: {
        fontSize: 25,
        fontFamily: FONTS.outfit,
        marginLeft: 20,
    },
    textSecondForm: {
        fontSize: 15,
        fontFamily: FONTS.outfit,
        marginTop: 10,
        marginLeft: 5,
    },
})