import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorite => {
      return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
    })
  }

  function itemIsFavoriteHandler() {}

  const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
  };  

  return (
    <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
  );
}
