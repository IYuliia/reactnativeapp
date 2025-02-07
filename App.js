import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store/store';
import { authStateChanged } from './utils/auth';

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
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);


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
