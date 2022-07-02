import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Tabs from "./tabs";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons2,
  icons,
  images,
} from "../constants";
import { useAuth } from "../contexts/auth";

const Drawer = createDrawerNavigator();

var data = new Date();
var dataAtual =
  String(data.getDate()).padStart(2, "0") +
  "/" +
  String(data.getMonth() + 1).padStart(2, "0") +
  "/" +
  data.getFullYear();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.base,
        borderRadius: SIZES.base,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
        }}
      />

      <Text
        style={{
          marginLeft: 15,
          color: COLORS.black,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons2.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={user.picture ? { uri: user.picture } : icons.user}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
              {user.given_name ? user.given_name : user?.name}
            </Text>
            <Text style={{ color: COLORS.black, ...FONTS.body4 }}>
              {user.family_name ? user.family_name : dataAtual}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            // added
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              marginBottom: 10,
              flexDirection: "row",
              height: 40,
              marginBottom: SIZES.base,
              alignItems: "center",
              paddingLeft: SIZES.base,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={icons2.home}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h3,
                marginLeft: SIZES.padding,
              }}
            >
              Home
            </Text>
          </TouchableOpacity>

          <CustomDrawerItem label="Cupons" icon={icons2.coupon} />

          <TouchableOpacity
            style={{
              marginBottom: 10,
              flexDirection: "row",
              height: 40,
              marginBottom: SIZES.base,
              alignItems: "center",
              paddingLeft: SIZES.base,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={icons2.favourite}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h3,
                marginLeft: SIZES.padding,
              }}
            >
              Favoritar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginBottom: 10,
              flexDirection: "row",
              height: 40,
              marginBottom: SIZES.base,
              alignItems: "center",
              paddingLeft: SIZES.base,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("FavoriteList")}
          >
            <Image
              source={icons.list}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h3,
                marginLeft: SIZES.padding,
              }}
            >
              Lista de favoritos
            </Text>
          </TouchableOpacity>

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.padding,
              marginLeft: SIZES.base,
              backgroundColor: COLORS.darkGray,
            }}
          />

          <TouchableOpacity
            style={{
              marginBottom: 10,
              flexDirection: "row",
              height: 40,
              marginBottom: SIZES.base,
              alignItems: "center",
              paddingLeft: SIZES.base,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("Map")}
          >
            <Image
              source={icons2.location}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h3,
                marginLeft: SIZES.padding,
              }}
            >
              Localização
            </Text>
          </TouchableOpacity>

          <CustomDrawerItem
            label={constants.screens.settings}
            icon={icons2.setting}
          />

          <TouchableOpacity
            style={{
              marginBottom: 10,
              flexDirection: "row",
              height: 40,
              marginBottom: SIZES.base,
              alignItems: "center",
              paddingLeft: SIZES.base,
              borderRadius: SIZES.base,
            }}
            onPress={() => navigation.navigate("QRcode")}
          >
            <Image
              source={icons2.qrcode}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h3,
                marginLeft: SIZES.padding,
              }}
            >
              Descontos
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            marginBottom: 10,
            flexDirection: "row",
            height: 40,
            marginBottom: SIZES.base,
            alignItems: "center",
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
          }}
          onPress={() => handleSignOut()}
        >
          <Image
            source={icons2.logout}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
            }}
          />
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h3,
              marginLeft: SIZES.padding,
            }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const MainScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: {
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: COLORS.lightGray2,
        },
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
        initialRouteName: "Tabs",
      }}
      drawerContent={(props) => {
        return <CustomDrawerContent navigation={props.navigation} />;
      }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
