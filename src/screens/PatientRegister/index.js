import React from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";

import style from "./style";
import { Input } from "../../components/Input/Input";
import { ButtonRegister } from "../../components/Button/Button";
import { patientRegisterDataSchema } from "../../utils/validations/responsible";
import { MaskedInput } from "../../components/Input/MaskedInput";

import background from "../../assets/images/background.png";
import soon from "../../assets/icons/soon.png";

export const PatientRegister = () => {

    const initialValues = {
        name: '',
        phone: '',
        mobile: '',
        email: '',
        nameResponsible: '',
        phoneResponsible: '',
    }

    return (

        <View style={style.mainContainer}>


            <ImageBackground
                source={background}
                resizeMode="cover"
                style={style.background}
            >
                <View style={style.container}>

                    <View style={style.soonContainer}>
                        <Image
                            source={soon}
                            style={style.soonIcon}
                        />
                    </View>

                    <Formik
                        validationSchema={patientRegisterDataSchema}
                        initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >

                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                {/* <View style={style.formContainer}> */}
                                <KeyboardAvoidingView
                                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                                    style={style.formContainer}
                                >

                                    <ScrollView>

                                        <View style={style.patientFormContainer}>

                                            <Text style={style.textForm}>Cadastro de paciente</Text>

                                            <Input
                                                iconName="user"
                                                placeholder="nome"
                                                onChangeText={handleChange('name')}
                                                onBlur={handleBlur('name')}
                                                value={values.name}
                                                hasError={!!errors.name}
                                                errorMessage={errors.name}
                                            />

                                            <MaskedInput
                                                iconName="phone"
                                                placeholder="telefone"
                                                onChangeText={handleChange('phone')}
                                                onBlur={handleBlur('phone')}
                                                value={values.phone}
                                                hasError={!!errors.phone}
                                                errorMessage={errors.phone}
                                                type={'cel-phone'}
                                                options={{
                                                    maskType: 'BRL',
                                                    withDDD: true
                                                }}
                                            />

                                            <MaskedInput
                                                iconName="mobile"
                                                placeholder="celular"
                                                onChangeText={handleChange('mobile')}
                                                onBlur={handleBlur('mobile')}
                                                value={values.mobile}
                                                hasError={!!errors.mobile}
                                                errorMessage={errors.mobile}
                                                type={'cel-phone'}
                                                options={{
                                                    maskType: 'BRL',
                                                    withDDD: true
                                                }}
                                            />

                                            <Input
                                                iconName="envelope"
                                                placeholder="email"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                hasError={!!errors.email}
                                                errorMessage={errors.email}
                                            />

                                        </View>

                                        <View style={style.responsibleFormContainer}>

                                            <View style={style.titleContainer}>

                                                <Text style={style.textForm}>Cadastro de responsável</Text>

                                                <Text style={style.textSecondForm}>(Opcional)</Text>

                                            </View>


                                            <Input
                                                iconName="user"
                                                placeholder="nome do responsável"
                                                onChangeText={handleChange('nameResponsible')}
                                                onBlur={handleBlur('nameResponsible')}
                                                value={values.nameResponsible}
                                                hasError={!!errors.nameResponsible}
                                                errorMessage={errors.nameResponsible}
                                            />


                                            <MaskedInput
                                                iconName="phone"
                                                placeholder="telefone do responsável"
                                                onChangeText={handleChange('phoneResponsible')}
                                                onBlur={handleBlur('phoneResponsible')}
                                                value={values.phoneResponsible}
                                                hasError={!!errors.phoneResponsible}
                                                errorMessage={errors.phoneResponsible}
                                                type={'cel-phone'}
                                                options={{
                                                    maskType: 'BRL',
                                                    withDDD: true
                                                }}
                                            />
                                        </View>

                                        <View style={style.buttonContainer}>

                                            <ButtonRegister
                                                label="CADASTRAR"
                                                onPress={handleSubmit}
                                            />

                                        </View>
                                    </ScrollView>
                                </KeyboardAvoidingView>
                                {/* </View> */}
                            </>
                        )}
                    </Formik>


                </View>

            </ImageBackground >

        </View >
    )
}