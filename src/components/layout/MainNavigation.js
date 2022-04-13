import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Link to="/">
          <h1>All Recipes</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/new-recipe">Add new Recipe</Link>
          </li>
          <li>
            <Link to="/favourites-recipes">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
