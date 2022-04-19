import NewRecipeForm from "../components/recipes/NewRecipeForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const NewRecipe = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const addRecipeHandler = (recipeData) => {
    setLoading(true);
    fetch(
      "https://recipe-app-21d3f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
      {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        if (!res.ok) {
          throw new Error("Ups! Something went wrong!");
        }
        navigator("/");
      })
      .catch((err) => setError(err.message));
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {error && <h3>{error}</h3>}
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
    </div>
  );
};
export default NewRecipe;
