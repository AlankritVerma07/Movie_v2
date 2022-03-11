import { Route, Routes } from "react-router-dom";
// import MovieSlide from "./Components/UI/MovieSlide";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const Routor = () => {
  return (
    <Routes>
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default Routor;
