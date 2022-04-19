import { useContext } from "react";

import Recipes from "../components/recipes/Recipes";
import FavouritesContext from "../store/favourites-context";

const FavouritesRecipes = () => {
  const favouriteCtx = useContext(FavouritesContext);

  let content = 0;

  if (favouriteCtx.totalFavourites === 0) {
    content = (
      <p className="no-favourites">No Favourites Recipes yet. Add some.</p>
    );
  } else {
    content = <Recipes recipes={favouriteCtx.favourites} />;
  }

  return <div>{content}</div>;
};
export default FavouritesRecipes;
