import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { MovieSearch } from "../UI/MovieGrid";
import { Link, useLocation, NavLink } from "react-router-dom";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const key = pathname.split("/");
  let category = key[1];
  if (category === "") category = "movie";

  console.log(category);
  return (
    <div className={classes.header}>
      <header>
        <nav>
          <ul>
            <li>
              <div className={classes.logo}>
                <img src={logo} alt="Logo for the app" />
                <NavLink to="/">LOGO</NavLink>
              </div>
            </li>
            <li>
              <MovieSearch category={category} />
            </li>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/movie"
              >
                Movies
              </NavLink>
            </li>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/tv"
              >
                TV
              </NavLink>
            </li>
            <li>
              <a href="#">
                <button className={classes["btn-auth"]}>Sign up</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
