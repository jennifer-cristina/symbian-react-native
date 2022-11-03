
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { PatientRegister } from '../screens/PatientRegister';
import { PatientListing } from '../screens/PatientListing';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Home" component={Home} options={{ headerLeft: () => null, headerShown: false }} />
                <Stack.Screen name="PatientRegister" component={PatientRegister} options={{ headerShown: false }} />
                <Stack.Screen name="PatientListing" component={PatientListing} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;