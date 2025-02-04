import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet} from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import StackNavigator from './navigation/StackNavigator';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular' : require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Light' : require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
