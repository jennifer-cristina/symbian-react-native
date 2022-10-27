import { Formik } from "formik";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid, View } from "react-native";

import { ButtonRegister } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { MaskedInput } from "../../components/Input/MaskedInput";
import { Soon } from "../../components/Soon/Soon";
import { Title } from "../../components/Title/Title";
import { patientRegisterDataSchema } from "../../utils/validations/responsible";
import Toast, { SuccessToast } from "react-native-toast-message";
import style from "./style";

import background from "../../assets/images/background.png";
import { patientRegisterService } from "../../services/patient";

export const PatientRegister = () => {

    const handleForm = async (data) => {

        const result = await patientRegisterService(data)

        if (result.success) 
            console.log('foooii')
            return Toast.show({
                type: 'success',
                text1: 'Sucesso',
                text2: 'Paciente cadastrado com sucesso 👋'
            })

    }

    const initialValues = {
        name: '',
        phone: '',
        mobile: '',
        email: '',
        name_responsible: '',
        phone_responsible: '',
    }

    return (

        <View style={style.mainContainer}>


            <ImageBackground
                source={background}
                resizeMode="cover"
                style={style.background}
            >
                <View style={style.container}>

                    <Soon />

                    <Formik
                        validationSchema={patientRegisterDataSchema}
                        initialValues={initialValues}
                        onSubmit={values => handleForm(values)}
                    >

                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>

                                <KeyboardAvoidingView
                                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                                    style={style.formContainer}
                                >

                                    <ScrollView>

                                        <View style={style.patientFormContainer}>

                                            <Title
                                                title="Cadastro de paciente"
                                            />

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

                                            <Title
                                                title="Cadastro de responsável"
                                                label="(Opcional)"
                                            />

                                            <Input
                                                iconName="user"
                                                placeholder="nome do responsável"
                                                onChangeText={handleChange('name_responsible')}
                                                onBlur={handleBlur('name_responsible')}
                                                value={values.name_responsible}
                                                hasError={!!errors.name_responsible}
                                                errorMessage={errors.name_responsible}
                                            />


                                            <MaskedInput
                                                iconName="phone"
                                                placeholder="telefone do responsável"
                                                onChangeText={handleChange('phone_responsible')}
                                                onBlur={handleBlur('phone_responsible')}
                                                value={values.phone_responsible}
                                                hasError={!!errors.phone_responsible}
                                                errorMessage={errors.phone_responsible}
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
                            </>
                        )}
                    </Formik>


                </View>

            </ImageBackground >

        </View >
    )
}