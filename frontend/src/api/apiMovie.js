const apiMovie = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: process.env.REACT_APP_API_KEY,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
};

export default apiMovie;
