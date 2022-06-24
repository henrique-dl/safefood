import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { OnBoarding, SignIn, SignUp } from "../screens";

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"OnBoarding"}
    >
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />

      <AuthStack.Screen name="SignIn" component={SignIn} />

      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
