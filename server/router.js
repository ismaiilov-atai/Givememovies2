const Router = require('koa-router');
const router = new Router();
const controller = require('./controllers/index');


router.post('/', controller.getMovies);
router.get('/id', controller.getMoviesByID);
router.post('/watchlist', controller.postWatchlist);
router.get('/watchlist', controller.getWatchlist);


module.exports = router;