import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const eachRecipe = props.recipes.map((recipe) => {
    return (
      <div>
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          preparation={recipe.preparation}
          ingridient={recipe.ingridient}
        />
      </div>
    );
  });
  return <div>{eachRecipe}</div>;
};

export default Recipes;
