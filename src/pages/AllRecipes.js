import { useEffect, useState } from "react";
import Recipes from "../components/recipes/Recipes";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(
      "https://recipe-app-21d3f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    )
      .then((res) => {
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
        setRecipes(loadedRecipes);
      });
  }, []);

  return <Recipes recipes={recipes} />;
};
export default AllRecipes;
