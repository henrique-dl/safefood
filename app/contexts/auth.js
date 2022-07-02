import React, { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../constants";
import * as AuthSession from "expo-auth-session";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [userError, setUserError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!user) {
      setLoading(false);
    }

    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("user");
      const storagedToken = await AsyncStorage.getItem("token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  async function googleSignIn() {
    try {
      const CLIENT_ID =
        "556033828524-0p5bugvus75j9jh71r384suq5qhkct1b.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@viyuka/SafeFood";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl });

      await AsyncStorage.setItem("token", params.access_token);

      if (type == "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(await response.json())
        );
        const storagedUser = await AsyncStorage.getItem("user");
        if (storagedUser) {
          setUserStorage(JSON.parse(storagedUser));
        }
      }
    } catch (error) {
      return error;
    }
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signOut, userError, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
