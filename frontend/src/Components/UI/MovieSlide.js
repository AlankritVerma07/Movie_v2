import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "./MovieSlide.module.css";
import apiMovie from "../../api/apiMovie";
import { movieType } from "../../api/tmbdApi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { fetchPopularMovies } from "../../actions/movie-action";

const MovieSlide = () => {
  const dispatch = useDispatch();
  const movieItems = useSelector((state) => state.popularMovie.movieItems);

  useEffect(() => {
    const params = { page: 1 };
    dispatch(fetchPopularMovies(movieType.popular, { params }));
  }, [dispatch]);
  return (
    <div className={classes.per}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 4000 }}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <SlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};
const SlideItem = (props) => {
  const item = props.item;
  const background = apiMovie.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={classes["items-container"]}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes["details-container"]}>
        <div className={classes.info}>
          <h2 className={classes.title}>{item.title}</h2>
          <div className={classes["title-details"]}>{item.overview}.</div>
          <div className={classes.btns}>
            <button className={classes["btn-now"]}>Watch Now</button>
            <button className={classes["btn-trailer"]}>Watch Trailer</button>
          </div>
        </div>
        <div className={classes.poster}>
          <img
            src={apiMovie.w500Image(item.poster_path)}
            alt="Poster of the displayed movie"
          />
        </div>
      </div>
    </div>
  );
};
export default MovieSlide;
