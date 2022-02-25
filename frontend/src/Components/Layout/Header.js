import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
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
              <div className={classes["movie-search"]}>
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
              </div>
            </li>
            <li className={classes.fancy}>
              <a href="#">Home</a>
            </li>
            <li className={classes.fancy}>
              <a href="#">Movies</a>
            </li>
            <li className={classes.fancy}>
              <a href="#">TV</a>
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
