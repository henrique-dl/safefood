import React, { useState } from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import * as AuthSession from "expo-auth-session";

import { FONTS, COLORS, icons2 } from "../constants";
import { useAuth } from "../contexts/auth";

const TextGoogleButton = ({ containerStyle, label, labelStyle, iconStyle }) => {
  const { googleSignIn } = useAuth();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={() => googleSignIn()}
    >
      <Image
        source={icons2.google}
        style={{
          ...styles.image,
          ...iconStyle,
        }}
      />

      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
});

export default TextGoogleButton;
