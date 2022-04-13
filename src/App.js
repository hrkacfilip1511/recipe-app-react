import Layout from "./components/layout/Layout";
import { Switch, Route, Routes } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes";
import NewRecipe from "./pages/NewRecipe";
import FavouritesRecipes from "./pages/FavouritesRecipes";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllRecipes />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
        <Route path="/favourites-recipes" element={<FavouritesRecipes />} />
      </Routes>
    </Layout>
  );
}

export default App;
