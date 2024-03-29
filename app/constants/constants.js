const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/onboardImages/onboardScreen1.png"),
    title: "Encontre os melhores lugares",
    description:
      "Tenha acesso aos melhores restaurantes para portadores da doença celíaca do DF",
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_02.png"),
    bannerImage: require("../assets/onboardImages/onboardScreen2.png"),
    title: "Escolha um prato delicioso",
    description:
      "Aqui você terá acesso aos melhores pratos com os melhores ingredientes feitos para você!",
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/onboardImages/onboardScreen3.png"),
    title: "Sem contaminação cruzada",
    description:
      "Nos estabelecimentos presentes no app, você poderá comer a vontade sem risco de contaminação cruzada :)",
  },
];

const screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favoritos",
  favouriteList: "Lista de favoritos",
  settings: "Configurações",
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.favouriteList,
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const GOOGLE_MAP_API_KEY = "AIzaSyAA9ysb0SKpLQm4yEu-RhuPyVXzbavZFek";

export default {
  onboarding_screens,
  screens,
  bottom_tabs,
  ratings,
  GOOGLE_MAP_API_KEY,
};
