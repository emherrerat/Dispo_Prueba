import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import Splash from './src/SplashScreen';
export default function App() {
    return (
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    );
}


/**
 * Metodo para llamar al splash
 * const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainScreen" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );**/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
