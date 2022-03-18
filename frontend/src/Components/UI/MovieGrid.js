import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmbdApi, { category, movieType, tvType } from "../../api/tmbdApi";
import MovieCard from "./MovieCard";
import classes from "./MovieGrid.module.css";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [genresArr, setGenresArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();
  console.log(keyword);
  useEffect(() => {
    const getList = async () => {
      //   const params = {};
      // const genresArr=[]
      let response,
        genresResponse = null;
      if (keyword === undefined) {
        const params = {};
        try {
          genresResponse = await tmbdApi.getGenres(props.category);
          setGenresArr(genresResponse.data.genres);

          switch (props.category) {
            case category.movie:
              response = await tmbdApi.getMoviesList(movieType.upcoming, {
                params,
              });
              break;
            default:
              response = await tmbdApi.getTvList(tvType.popular, { params });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmbdApi.search(props.category, { params });
      }
      console.log(response);
      setItems(response.data.results);
      setTotalPage(response.data.total_pages);
    };
    getList();
  }, [keyword, props.category]);
  return (
    <Fragment>
      <div className={classes["movieList-grid"]}>
        {items.map((item, i) => (
          <div className={`low ${classes["low-body"]}`}>
            <MovieCard
              item={item}
              category={props.category}
              genres={genresArr}
              key={i}
            />
          </div>
        ))}
      </div>
      <div className={classes["movieList-loadMore"]}>
        <button className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}>
          View more
        </button>
      </div>
    </Fragment>
  );
};

export default MovieGrid;
