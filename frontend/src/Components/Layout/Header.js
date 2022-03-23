import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { MovieSearch } from "../UI/MovieGrid";
import { Link, useLocation } from "react-router-dom";
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
let category = "";
const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const key = pathname.split("/");
  let category = key[1];
  const active = headerNav.findIndex((e) => e.path === pathname);
  console.log(active);
  if (active === 2) {
    category = "tv";
    if (active === -1) category = "tv";
  }
  if (active === 1 || active === 0) {
    category = "movie";
    if (active === -1) category = "movie";
  }
  console.log(category);
  return (
    <div className={classes.header}>
      <header>
        <nav>
          <ul>
            <li>
              <div className={classes.logo}>
                <img src={logo} alt="Logo for the app" />
                <a href="#">LOGO</a>
              </div>
            </li>
            <li>
              <MovieSearch category={category} />
              {/*<div className={classes["movie-search"]}>
                <input
                  name="search"
                  type="text"
                  placeholder="Search by movie title"
                  value=""
                />
                <i
                  className={`fas fa-search ${classes["search-btn"]}`}
                  aria-hidden="true"
                ></i>
  </div>*/}
            </li>
            <li className={classes.fancy}>
              <Link to="/">Home</Link>
            </li>
            <li className={classes.fancy}>
              <Link to="/movie">Movies</Link>
            </li>
            <li className={classes.fancy}>
              <Link to="/tv">TV</Link>
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
