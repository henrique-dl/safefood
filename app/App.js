import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

import Tabs from './navigations/tabs'
// import { Home } from './screens'
// import { MainLayout } from './screens'
import CustomDrawer from './navigations/CustomDrawer'
// import { EditProfile } from './screens';

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
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Home'}
              >
                  <Stack.Screen name="Home" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={CustomDrawer} />
              </Stack.Navigator>
          </NavigationContainer>
      )
}

export default App;