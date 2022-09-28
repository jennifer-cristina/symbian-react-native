import React from "react";
import { Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import style from "./style";
import { Input } from "../../components/Input/Input";
// import { Button } from "../../components/Button/Button";
import { ButtonRegister } from "../../components/Button/Button";

import background from "../../assets/images/background.png";
import soon from "../../assets/icons/soon.png";

export const PatientRegister = () => {

    return (

        <View style={style.mainContainer}>


            <ImageBackground
                source={background}
                resizeMode="cover"
                style={style.background}
            >
                <KeyboardAvoidingView style={style.container}>

                    <View style={style.soonContainer}>
                        <Image
                            source={soon}
                            style={style.soonIcon}
                        />
                    </View>

                    <View style={style.formContainer}>

                        <View style={style.patientFormContainer}>

                            <Text style={style.textForm}>Cadastro de paciente</Text>

                            <Input
                                iconName="user"
                                placeholder="nome"
                            />

                            <Input
                                iconName="phone"
                                placeholder="telefone"
                            />

                            <Input
                                iconName="mobile"
                                placeholder="celular"
                            />

                            <Input
                                iconName="envelope"
                                placeholder="email"
                            />

                        </View>

                        <View style={style.responsibleFormContainer}>

                            <View style={style.titleContainer}>

                                <Text style={style.textForm}>Cadastro de responsável</Text>

                                <Text style={style.textSecondForm}>(Opcional)</Text>

                            </View>


                            <Input
                                iconName="user"
                                placeholder="nome"
                            />


                            <Input
                                iconName="phone"
                                placeholder="telefone"
                            />
                        </View>

                        <View style={style.buttonContainer}>

                            <ButtonRegister
                                label="CADASTRAR"
                            />

                        </View>
                    </View>

                </KeyboardAvoidingView>

            </ImageBackground>

        </View>
    )
}