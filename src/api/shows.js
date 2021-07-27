import axios from "axios";

const getShows = async () => {
  try {
    const request = await axios.get("https://api.tvmaze.com/shows");
    const { data } = request;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getShows };
