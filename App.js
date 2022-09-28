import { Text } from 'react-native';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';

import { PatientRegister } from './src/screens/PatientRegister';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Outfit_400Regular

  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <>
        <PatientRegister />
      </>
    );
  }

}
