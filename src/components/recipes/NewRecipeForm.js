import classes from "./NewRecipeForm.module.css";
import { useRef } from "react";
const NewRecipeForm = (props) => {
  const titleRef = useRef();
  const picRef = useRef();
  const ingridientRef = useRef();
  const preparationRef = useRef();
  const submitRecipeHandler = (e) => {
    e.preventDefault();
    const titleInputValue = titleRef.current.value;
    const picInputValue = picRef.current.value;
    const ingridientInputValue = ingridientRef.current.value;
    const preparationInputValue = preparationRef.current.value;

    const recipeData = {
      title: titleInputValue,
      image: picInputValue,
      ingridient: ingridientInputValue,
      preparation: preparationInputValue,
    };
    props.onAddRecipe(recipeData);
  };
  return (
    <div className={classes.formContainer}>
      <h2>Add New Recipe</h2>
      <form onSubmit={submitRecipeHandler}>
        <div className={classes.forName}>
          <label htmlFor="title">Recipe name: </label>
          <input ref={titleRef} id="title" type="text" required />
        </div>
        <div className={classes.forPicture}>
          <label htmlFor="image">Recipe picture: </label>
          <input ref={picRef} id="image" type="url" alt="img" />
        </div>
        <div className={classes.forIngredients}>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea ref={ingridientRef} id="ingredients" required />
        </div>
        <div className={classes.forPreparation}>
          <label htmlFor="preparation">Preparation: </label>
          <textarea ref={preparationRef} id="preparation" required />
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default NewRecipeForm;
