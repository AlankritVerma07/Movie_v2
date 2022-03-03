import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import MovieSlide from "./Components/UI/MovieSlide";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <MovieSlide />
      <Footer />
    </Fragment>
  );
}

export default App;
