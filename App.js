import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';

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
    <LoginScreen />
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
