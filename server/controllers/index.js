const {movieFinderByID, movieFinder, inserWatchlist, retriveWatchlist} = require('../APIs/TMDB');

async function getMovies(ctx) {
  try {
    ctx.body = await movieFinder(ctx.request.body.prompt);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}


async function getMoviesByID(ctx) {
  try {
    ctx.body = await movieFinderByID(ctx.request.body.id)
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}

async function postWatchlist(ctx) {
  try {
    ctx.body = await inserWatchlist(ctx.request.body.movie_id);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}

async function getWatchlist(ctx) {
  try {
    ctx.body = await retriveWatchlist();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
}





module.exports = {getMovies, getMoviesByID, postWatchlist, getWatchlist};