import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS } from "../../assets/const";
import patient from "../../assets/icons/patient.png"
import { TextInputMask } from 'react-native-masked-text';

export const CardPatient = ({ name, phone }) => {

    return (
        <View style={style.patientContainer}>

            <View style={style.iconContainer}>
                <Image source={patient} style={style.iconPatient} />
            </View>

            <View style={style.infoContainer}>
                <Text style={style.textNameInfo}>{name}</Text>
                <TextInputMask
                    style={style.textPhoneInfo}
                    type={'cel-phone'}
                    value={phone}
                    options={{
                        maskType: 'BRL',
                        withDDD: true
                    }}>
                </TextInputMask>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    patientContainer: {
        width: 300,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.marsala
    },
    iconPatient: {
        width: 55,
        height: 51,
    },
    textNameInfo: {
        fontSize: 20,
    },
    textPhoneInfo: {
        fontSize: 15,
    },
    iconContainer: {
        flex: 1,
    },
    infoContainer: {
        flex: 3,
    }
})