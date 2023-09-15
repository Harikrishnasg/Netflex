import axios from "axios";

export const api = async (movie) => {
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movie}`,
        params: {
          exact: 'false',
          titleType: 'movie'
        },
        headers: {
          'X-RapidAPI-Key': 'd56fb8fed8msh5eb4c04d78f5a33p1b325ajsn153bef543c4d',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}