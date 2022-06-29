import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { icons, COLORS, SIZES, FONTS, icons2, images } from "../constants";

import { restaurantData } from "./Home/Home";

const FavouriteList = ({ navigation }) => {
  let favorites = restaurantData.filter((item) => item.favorite == true);

  const [favoritesLen, setFavoritesLen] = React.useState(0);

  navigation.addListener("focus", () => {
    favorites = restaurantData.filter((item) => item.favorite == true);
    setFavoritesLen(favorites.length);
  });

  function renderHeader() {
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

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={icons2.home}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderFavoriteList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.placeitem}>
          <Image style={styles.image} source={item.photo} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View height={SIZES.height * 0.75}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  return (
    <View>
      {renderHeader()}
      <Text
        style={{
          textAlign: "center",
          ...FONTS.h1,
          fontSize: 20,
          paddingVertical: 20,
        }}
      >
        Estabelecimentos Favoritados
        <Image
          style={{
            width: 35,
            height: 35,
          }}
          source={icons2.favorite_place}
        />
      </Text>
      {favoritesLen == 0 ? (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons2.favorite_list}
              style={{
                width: SIZES.width * 1,
                height: SIZES.width * 0.8,
                marginBottom: -SIZES.padding,
              }}
            />
          </View>

          <View
            style={{
              padding: 50,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22 }}>
              Nenhum favorito ainda
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: SIZES.radius,
                textAlign: "center",
                color: COLORS.darkGray,
                ...FONTS.body3,
              }}
            >
              Selecione estabelecimentos que você está interessado clicando no
              ícone ♥.
            </Text>
          </View>
        </>
      ) : (
        renderFavoriteList()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  placeitem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "blue",
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "#666",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});

export default FavouriteList;
