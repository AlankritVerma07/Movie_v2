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
        <div className={classes.logo}>
          <img src={logo} alt="Logo for the app" />
          <NavLink to="/">LOGO</NavLink>
        </div>
        <MovieSearch category={category} />
        <a
          className={classes["mobile-nav-toggle"]}
          aria-controls="main-menu"
          href="#main-menu"
          id="main-menu-toggle"
        >
          <span class="sr-only">Menu</span>
          <span class="fa fa-bars fa-lg" aria-hidden="true"></span>
        </a>
        <nav>
          <ul id="main-menu" className={classes["main-menu"]}>
            <a
              className={classes["menu-close"]}
              href="#main-menu-toggle"
              id="main-menu-close"
              aria-label="Close main menu"
            >
              <span class="sr-only">Close main menu</span>
              <span class="fa fa-close fa-lg" aria-hidden="true"></span>
            </a>
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
          <a
            href="#main-menu-toggle"
            className={classes["backdrop"]}
            tabindex="-1"
            hidden
          >
            <span class="sr-only">Close main menu</span>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
