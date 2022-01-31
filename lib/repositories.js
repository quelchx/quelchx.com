import axios from "axios";

const getRepositories = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:quelchx+sort:author-date-asc`
    );
    let repos = res.data.items;
    let latest = repos.slice(0, 6);
    return latest;
  } catch (error) {
    return error;
  }
};

export default getRepositories;
