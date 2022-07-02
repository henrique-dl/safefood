import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { Extrapolate } from "react-native-reanimated";
import { TextButton } from "../components";

import { icons, COLORS, SIZES, FONTS } from "../constants";

import { restaurantData } from "./Home/Home";

const establishment = require("../assets/onboardImages/onboardScreen1.png");

const Restaurant = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const [isFavorite, setIsFavorite] = React.useState({});
  let currRestaurant = {};

  if (route.params != null) {
    currRestaurant = restaurantData.find(
      (item) => item.id == route.params.item.id
    );
  }

  React.useEffect(() => {
    if (route.params != null) {
      let { item, currentLocation } = route.params;

      setRestaurant(item);
      setCurrentLocation(currentLocation);
    }
    setIsFavorite(currRestaurant.favorite);
  }, [route.params, currRestaurant.favorite]);

  function toggleFavorite() {
    if (isFavorite == null || isFavorite == undefined || isFavorite == false) {
      route.params.item.favorite = true;
      setIsFavorite(route.params.item.favorite);
    } else if (isFavorite == true) {
      route.params.item.favorite = false;
      setIsFavorite(route.params.item.favorite);
    }
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginTop: 35 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("FavoriteList")}
        >
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />

              {/* Quantity */}
              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}
                  onPress={() => toggleFavorite()}
                >
                  {currRestaurant.favorite ? (
                    <Text style={{ ...FONTS.body1, color: COLORS.primary }}>
                      ♥
                    </Text>
                  ) : (
                    <Text style={{ ...FONTS.body1, color: COLORS.black }}>
                      ♡
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 30 }}>
              {currRestaurant.favorite ? (
                <Text style={{ ...FONTS.body3 }}>
                  Estabelecimento adicionado à lista de favoritos
                </Text>
              ) : (
                <Text style={{ ...FONTS.body3 }}>
                  Aperte o ícone de coração para {"\n"} favoritar o
                  estabelecimento
                </Text>
              )}
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - R$ {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* Calories */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Image
                source={icons.fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.darkGray,
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={{ height: 30, paddingBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: SIZES.padding,
          }}
        >
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  marginBottom: 50,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderNavigationButton() {
    return (
      <View
        style={{
          marginBottom: 90,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.9,
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            borderRadius: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("Map", {
              restaurant: restaurant,
              currentLocation: currentLocation,
            })
          }
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            Ver localização
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderNullRestaurant() {
    return (
      <View>
        <View
          style={{
            padding: 25,
          }}
        >
          <Text style={{ textAlign: "center", ...FONTS.h1, fontSize: 25 }}>
            Favoritar Estabelecimentos
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={establishment}
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
          <Text style={{ textAlign: "center", fontSize: 25 }}>♥</Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: SIZES.radius,
              textAlign: "center",
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Parece que você ainda não selecionou um estabelecimento para
            favoritá-lo.
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: SIZES.width * 0.18,
            marginBottom: 60,
          }}
        >
          <TextButton
            label="Estabelecimentos"
            buttonContainerStyle={{
              height: 60,
              width: 250,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {restaurant != null ? (
        <>
          {renderFoodInfo()}
          {renderDots()}
          {renderNavigationButton()}
        </>
      ) : (
        <>{renderNullRestaurant()}</>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray1,
  },
});

export default Restaurant;
