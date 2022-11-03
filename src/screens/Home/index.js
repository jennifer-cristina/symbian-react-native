import { ImageBackground, View } from "react-native";

import backgroundHome from "../../assets/images/backgroundHome.png";
import { Button } from "../../components/Button/Button";
import { Soon } from "../../components/Soon/Soon";
import style from "./style";


export const Home = ({ navigation }) => {

    return (

        <View style={style.mainContainer}>


            <ImageBackground
                source={backgroundHome}
                resizeMode="cover"
                style={style.background}
            >
                <View style={style.container}>

                    <Soon width={150} height={60} />

                    <View style={style.buttonsContainer}>

                        <Button label="CADASTRAR PACIENTES" onPress={() => navigation.navigate('PatientRegister')}/>
                        <Button label="LISTAR PACIENTES"  onPress={() => navigation.navigate('PatientListing')}/>

                    </View>

                </View>

            </ImageBackground >

        </View >
    )
}