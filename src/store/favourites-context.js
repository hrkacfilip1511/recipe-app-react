import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteRecipe) => {},
  removeFavourite: (recipeId) => {},
  itemIsFavourite: (recipeId) => {},
});

export function FavouritesContextProvider(props) {
  const [favouritesRecipes, setFavouritesRecipes] = useState([]);

  const addFavourite = (favouriteRecipe) => {
    setFavouritesRecipes((prevRecipe) => {
      return prevRecipe.concat(favouriteRecipe);
    });
  };

  const removeFavourite = (recipeId) => {
    setFavouritesRecipes((prevFavRecipe) => {
      return prevFavRecipe.filter((recipe) => recipe.id !== recipeId);
    });
  };

  const itemIsFavourite = (recipeId) => {
    return favouritesRecipes.some((recipe) => recipe.id === recipeId);
  };

  const context = {
    favourites: favouritesRecipes,
    totalFavourites: favouritesRecipes.length,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
    itemIsFavourite: itemIsFavourite,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
