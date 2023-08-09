
const ApiService = {

  getMovies: async (prompt) => {
    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(`Error in getMovies: ${error}`);
    }
  },

  getMovieByID: async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/id`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(`Error in getMovieByID: ${error}`);
    }
  },

  getWatchlist: async () => {
    try {
      const response = await fetch(`http://localhost:3001/watchlist`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  handleWatchList: async (movie) => {
    try {
      const response = await fetch('http://localhost:3001/watchlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movie_id: movie.id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

export default ApiService;