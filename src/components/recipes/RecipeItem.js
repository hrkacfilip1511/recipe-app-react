import classes from "./RecipeItem.module.css";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
const RecipeItem = (props) => {
  const favouriteCtx = useContext(FavouritesContext);
  const recipeIsFavourite = favouriteCtx.itemIsFavourite(props.id);
  const changeFavouriteStatus = () => {
    if (recipeIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        ingridient: props.ingridient,
        preparation: props.preparation,
      });
    }
  };

  return (
    <div className={classes.recipeContainer}>
      <div className={classes.title}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.favourites}>
          <button type="button" onClick={changeFavouriteStatus}>
            <FaRegHeart
              className="heart"
              style={{
                color: `${recipeIsFavourite ? "red" : "white"}`,
              }}
            />
          </button>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
      <div className={classes.ingridientsAndPreparation}>
        <div className={classes.ingridients}>
          <span>Ingridients </span>
          <p>{props.ingridient}</p>
        </div>
        <div className={classes.preparation}>
          <span>Preparation </span>
          <p>{props.preparation}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
