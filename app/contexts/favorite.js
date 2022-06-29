import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({
  isFavorite: null,
  setValue: (value) => {},
});

export const useFavorite = () => useContext(FavoriteContext);

function Favorite({ children }) {
  const [isFavorite, setIsFavorite] = useState(null);

  const setIsFavoriteEvent = (isFavorite) => {
    setIsFavorite(isFavorite);
  };

  const value = { isFavorite, setIsFavoriteEvent };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default Favorite;
