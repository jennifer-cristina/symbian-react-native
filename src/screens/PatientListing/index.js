import { ImageBackground, ScrollView, View } from "react-native";

import { Soon } from "../../components/Soon/Soon";
import { Title } from "../../components/Title/Title";
import style from "./style";

import { useEffect, useState } from "react";
import backgroundPatientsListing from "../../assets/images/backgroundPatientsListing.png";
import { BackButton } from "../../components/Button/BackButton";
import { CardPatient } from "../../components/PatientListing/CardPatient";
import { getPatientsService } from "../../services/patient";
import { Loading } from "../Loading";

export const PatientListing = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState([]);

    const getPatients = async () => {

        const result = await getPatientsService()
        setPatients(result.data)
        setLoading(false)

    }

    useEffect(() => {
        getPatients()
    }, [])

    return (

        <View style={style.mainContainer}>

            {loading ? (
                <Loading />
            ) : (

                <ImageBackground
                    source={backgroundPatientsListing}
                    resizeMode="cover"
                    style={style.background}
                >
                    <View style={style.container}>

                        <View style={style.headerContainer}>

                            <BackButton navigation={navigation} />
                            <Soon width={140} height={60} />

                        </View>

                        <View style={style.listContainer}>

                            <Title
                                title="LISTA DE PACIENTES"
                            />

                            <View style={style.patientsContainer}>

                                <ScrollView>

                                    {
                                        patients.map(item => (
                                            <CardPatient
                                                name={item.name}
                                                phone={item.phone}
                                                key={item.id}
                                            />
                                        ))
                                    }

                                </ScrollView>

                            </View>

                        </View>




                    </View>

                </ImageBackground >

            )}

        </View >
    )
}