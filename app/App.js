import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/auth';
import { useFonts } from 'expo-font';

import { OnBoarding, SignIn, SignUp, ForgotPassword, Otp, Home } from './screens'

import MainScreen from './navigations/Drawer';
import Routes from './routes';

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    });
    
    if (!loaded) {
      return null;
    }

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}

export default App;