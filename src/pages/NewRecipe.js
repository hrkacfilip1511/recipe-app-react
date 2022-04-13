import NewRecipeForm from "../components/recipes/NewRecipeForm";
import { useNavigate } from "react-router-dom";
const NewRecipe = () => {
  const navigator = useNavigate();
  const addRecipeHandler = (recipeData) => {
    fetch(
      "https://recipe-app-21d3f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
      {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigator("/");
    });
  };
  return (
    <div>
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
    </div>
  );
};
export default NewRecipe;
