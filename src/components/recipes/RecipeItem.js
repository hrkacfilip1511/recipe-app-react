import classes from "./RecipeItem.module.css";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
const RecipeItem = (props) => {
  const [isFavourite, setFavourite] = useState(false);
  const changeFavouriteStatus = () => {
    setFavourite((prevStatus) => !prevStatus);
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
                color: `${isFavourite ? "red" : "white"}`,
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
          <p>{props.ingridients}</p>
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
