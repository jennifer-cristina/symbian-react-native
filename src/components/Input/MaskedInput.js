import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { TextInputMask } from 'react-native-masked-text';
import { COLORS, FONTS } from "../../assets/const";

export const MaskedInput = ({
    iconName,
    placeholder,
    onChangeText,
    onBlur,
    value,
    hasError,
    errorMessage,
    type,
    options
}) => {

    return (
        <View style={styles.inputContainer}>

            <View>
                <FontAwesome
                    name={hasError ? "times-circle" : iconName}
                    style={hasError ? styles.errorIcon : styles.icon}
                />
                <TextInputMask
                    type={type}
                    options={options}
                    style={hasError ? styles.errorInput : styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />
                {hasError && (
                    <Text style={styles.errorText}>
                        {errorMessage}
                    </Text>
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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

