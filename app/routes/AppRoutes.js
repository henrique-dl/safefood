import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../navigations/Drawer";

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="MainScreen" component={MainScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
