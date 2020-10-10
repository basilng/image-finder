import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pWYG5y--jU3_GQ1WFLKJdVVVedTiR1D4NbBQxodKFtU",
  },
});
