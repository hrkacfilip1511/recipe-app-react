import { useEffect, useState } from "react";
import Recipes from "../components/recipes/Recipes";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllRecipes = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://recipe-app-21d3f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    )
      .then((res) => {
        setLoading(false);
        if (!res.ok) {
          throw new Error("Request failed! " + res.status + " Error");
        }
        return res.json();
      })
      .then((responseData) => {
        const loadedRecipes = [];

        for (const key in responseData) {
          loadedRecipes.push({
            id: key,
            title: responseData[key].title,
            image: responseData[key].image,
            preparation: responseData[key].preparation,
            ingridient: responseData[key].ingridient,
          });
        }
        console.log(loadedRecipes);
        setRecipes(loadedRecipes);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <h3 className="error-txt">{error}</h3>}
      {isLoading ? <LoadingSpinner /> : <Recipes recipes={recipes} />}
    </div>
  );
};
export default AllRecipes;
