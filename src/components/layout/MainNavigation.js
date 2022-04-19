import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <NavLink to="/">
          <h1>All Recipes</h1>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "rgb(253, 169, 169)" }
              }
            >
              All Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-recipe"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "rgb(253, 169, 169)" }
              }
            >
              Add new Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites-recipes"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "rgb(253, 169, 169)" }
              }
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
