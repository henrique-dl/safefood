import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import { Header } from "../../components";
import { useFavorite } from "../../contexts/favorite";

export let restaurantData = {};

const Home = ({ navigation }) => {
  navigation = navigation;
  const initialCurrentLocation = {
    streetName: "Distrito Federal",
  };

  const categoryData = [
    {
      id: 1,
      name: "Hot Dog",
      icon: icons.hotdog,
    },
    {
      id: 2,
      name: "Massas",
      icon: icons.noodle,
    },
    {
      id: 3,
      name: "Padarias",
      icon: icons.bakery,
    },
    {
      id: 4,
      name: "Saladas",
      icon: icons.salad,
    },
    {
      id: 5,
      name: "Hamburguer",
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: "Pizza",
      icon: icons.pizza,
    },
    {
      id: 7,
      name: "Salgados",
      icon: icons.fries,
    },
    {
      id: 8,
      name: "Sushi",
      icon: icons.sushi,
    },
    {
      id: 9,
      name: "Sobremesas",
      icon: icons.donut,
    },
    {
      id: 10,
      name: "Bebidas",
      icon: icons.drink,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  restaurantData = [
    {
      id: 1,
      name: "Senhora Amêndoa",
      favorite: null,
      rating: 4.4,
      categories: [7, 9, 10],
      priceRating: expensive,
      photo: images.sra_amendoa,
      administrativeCity: "Asa Norte",
      location: {
        latitude: -15.73110853594763,
        longitude: -47.894868264974825,
      },
      menu: [
        {
          menuId: 1,
          name: "Suavecito",
          photo: images.suavecito,
          description: "Smothies sabor morango e maracujá",
          calories: 100,
          price: 15,
        },
        {
          menuId: 2,
          name: "Chocalate quente e torta",
          photo: images.torta,
          description: "Chocolate quente cremoso e seu pedaço de torta ",
          calories: 250,
          price: 25,
        },
        {
          menuId: 3,
          name: "Risole de abóbora com carne seca",
          photo: images.risole,
          description:
            "Massa de mandioca com abóbora, queijo cheddar vaganita e carne seca desfiada",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "Padaria Seleve",
      favorite: null,
      rating: 4.2,
      categories: [3, 4, 9],
      priceRating: fairPrice,
      photo: images.seleve,
      administrativeCity: "Asa Norte",
      location: {
        latitude: -15.774958615837175,
        longitude: -47.88816826257737,
      },
      menu: [
        {
          menuId: 4,
          name: "Salada Jovem Guarda",
          photo: images.salada_seleve,
          description:
            "Salada vegana leve e refrescante com sorvete de manjericão",
          calories: 250,
          price: 25,
        },
        {
          menuId: 5,
          name: "Pães",
          photo: images.pao_seleve,
          description: "Pães sem glúten e sem lácteos",
          calories: 100,
          price: 10,
        },
        {
          menuId: 6,
          name: "Espaguette com salmão",
          photo: images.macarrao_seleve,
          description:
            "Espaguete de Palmito Pupunha, Salmão em Cubos, Tomate Cereja",
          calories: 200,
          price: 24,
        },
        {
          menuId: 7,
          name: "Torta com sorvete",
          photo: images.torta_seleve,
          description: "Torta com sorvete vegano chocolate ou frutas vermelhas",
          calories: 150,
          price: 20,
        },
      ],
    },
    {
      id: 3,
      name: "Passos Sem Glúten",
      favorite: null,
      rating: 4.5,
      categories: [9],
      priceRating: expensive,
      photo: images.passos_sem_gluten,
      administrativeCity: "Águas Claras",
      location: {
        latitude: -15.832968989923765,
        longitude: -48.034748944484754,
      },
      menu: [
        {
          menuId: 8,
          name: "Bolo de festa",
          photo: images.bolo_passos_sem_gluten,
          description: "Delicioso bolo de chocolate sem glúten",
          calories: 346,
          price: 50,
        },
      ],
    },
    {
      id: 4,
      name: "Nutri Bakery",
      favorite: null,
      rating: 4.4,
      categories: [3, 6],
      priceRating: expensive,
      photo: images.nutri_bakery,
      administrativeCity: "Asa Sul",
      location: {
        latitude: -15.813196994242716,
        longitude: -47.89394244415947,
      },
      menu: [
        {
          menuId: 9,
          name: "Pizza sem glúten",
          photo: images.pizza_nutri_bakery,
          description: "Pizza vegana com ingredientes selecionados e frescos",
          calories: 497,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: "Há Hamburgueria",
      favorite: null,
      rating: 4.3,
      categories: [5, 7, 10],
      priceRating: fairPrice,
      photo: images.ha_hamburgueria,
      administrativeCity: "Sudoeste",
      location: {
        latitude: -15.794281438234423,
        longitude: -47.921111759243324,
      },
      menu: [
        {
          menuId: 10,
          name: "Combos sem glúten",
          photo: images.ha_hamburgueria_combos,
          description: "Combo lanche e batata 100% glúten free",
          calories: 550,
          price: 57,
        },
        {
          menuId: 11,
          name: "Burger Tilápia",
          photo: images.ha_hamburgueria_tilapia,
          description:
            "Hambúrguer de tilápia, sem glúten, sem leite e sem soja",
          calories: 317,
          price: 8,
        },
        {
          menuId: 12,
          name: "Trio Há Hamburgueria",
          photo: images.ha_hamburgueria_trio,
          description:
            "Burguer de fraldinha, batata rústica e milk shake vegano",
          calories: 675,
          price: 68,
        },
        {
          menuId: 13,
          name: "Batata",
          photo: images.ha_hamburgueria_batata,
          description: "Batata livre de glúten, leite e soja",
          calories: 230,
          price: 18,
        },
      ],
    },
    {
      id: 6,
      name: "Amaranto Cozinha Inclusiva",
      favorite: null,
      rating: 4.8,
      categories: [1, 7, 10],
      priceRating: affordable,
      photo: images.amaranto,
      administrativeCity: "Gama",
      location: {
        latitude: -16.013611558711755,
        longitude: -48.06846553902774,
      },
      menu: [
        {
          menuId: 12,
          name: "Cachorro-quente",
          photo: images.amaranto_hotdog,
          description: "Cachorro-quente de salsicha suína, palmito e frango",
          calories: 236,
          price: 24,
        },
        {
          menuId: 13,
          name: "Sanduíche natural",
          photo: images.amaranto_sanduiche,
          description:
            "Sanduíche 100% vegano com queijo, maionese alface e tomate",
          calories: 187,
          price: 21,
        },
        {
          menuId: 14,
          name: "Drink (não alcoólico)",
          photo: images.amaranto_drink,
          description: "Drink com camomila, água de coco e limão",
          calories: 87,
          price: 16,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    if (selectedCategory == category) {
      setSelectedCategory(null);
      setRestaurants(restaurantData);
    } else {
      setSelectedCategory(category);
      setRestaurants(restaurantList);
    }
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Estabelecimentos</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ ...FONTS.h1, paddingRight: 15 }}>Seguros</Text>
          <Image
            source={icons.health_icon}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.administrativeCity}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {" "}
                    .{" "}
                  </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.green
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 65,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
