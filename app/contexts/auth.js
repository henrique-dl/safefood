import React, { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import * as auth from "../services/auth";
import { COLORS } from "../constants";
import api from "../libs/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!user) {
      setLoading(false);
    }

    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem("@SafeFoodAuth:user");
      const storageToken = await AsyncStorage.getItem("@SafeFoodAuth:token");

      // console.log(storageUser);
      // console.log(storageToken);

      if (storageUser && storageToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storageToken.token}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.token}`;

    await AsyncStorage.setItem(
      "@SafeFoodAuth:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@SafeFoodAuth:token", response.token);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  // console.log(loading);
  if (loading) {
    // setLoading(!loading);
    // aqui
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
