import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

import { OnBoarding, SignIn, SignUp, ForgotPassword, Otp, Home } from './screens'

import MainScreen from './navigations/Drawer';

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }

    
  return (
          <NavigationContainer>
              {/* <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Home'}
              >
                  <Stack.Screen name="Home" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={CustomDrawer} />
              </Stack.Navigator> */}

              {/* <CustomDrawer /> */}


               <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
               <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                 <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                />

            </Stack.Navigator>
          </NavigationContainer>
      )
}

export default App;