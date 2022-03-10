import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import MovieSlide from "./Components/UI/MovieSlide";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
import Wrapper from "../src/Components/Layout/Wrapper";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Wrapper>
      <Header />
      {/*<MovieSlide />
      <Home />*/}
      <Detail />
      <Footer />
    </Wrapper>
  );
}

export default App;
