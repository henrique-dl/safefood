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

const FavouriteList = ({ navigation }) => {
  const favoriteData = [
    {
      id: 1,
      name: "Senhora Amêndoa",
      rating: 4.4,
      categories: [7, 9, 10],
      // priceRating: expensive,
      photo: images.sra_amendoa,
      administrativeCity: "Asa Norte",
    },
    {
      id: 2,
      name: "Padaria Seleve",
      rating: 4.2,
      categories: [3, 4, 9],
      // priceRating: fairPrice,
      photo: images.seleve,
      administrativeCity: "Asa Norte",
    },
    {
      id: 3,
      name: "Passos Sem Glúten",
      rating: 4.5,
      categories: [9],
      // priceRating: expensive,
      photo: images.passos_sem_gluten,
      administrativeCity: "Águas Claras",
    },
    {
      id: 4,
      name: "Nutri Bakery",
      rating: 4.4,
      categories: [3, 6],
      // priceRating: expensive,
      photo: images.nutri_bakery,
      administrativeCity: "Asa Sul",
    },
    {
      id: 5,
      name: "Há Hamburgueria",
      rating: 4.3,
      categories: [5, 7, 10],
      // priceRating: fairPrice,
      photo: images.ha_hamburgueria,
      administrativeCity: "Sudoeste",
    },
    {
      id: 6,
      name: "Amaranto Cozinha Inclusiva",
      rating: 4.8,
      categories: [1, 7, 10],
      // priceRating: affordable,
      photo: images.amaranto,
      administrativeCity: "Gama",
    },
  ];

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
          data={favoriteData}
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
      {renderFavoriteList()}
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
