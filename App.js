import { Text } from 'react-native';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import Toast from "react-native-toast-message";

import { PatientRegister } from './src/screens/PatientRegister';
import { useFonts } from 'expo-font';
import { Home } from './src/screens/Home';
import Navigation from './src/navigation/navigation';

export default function App() {

  const [fontsLoaded] = useFonts({
    Outfit_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <>
        <Navigation />
        <Toast/>
      </>
    );
  }

}
