import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const Header = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", height: 50, marginTop: 35 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image
          source={icons.burger_menu}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "70%",
            height: "100%",
            backgroundColor: COLORS.lightGray3,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Distrito Federal</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() =>
          navigation.navigate("Map", {
            restaurant: {},
            currentLocation: {},
          })
        }
      >
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
