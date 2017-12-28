import axios from "axios";

const getRepos = (username) =>
  axios.get(`https://api.github.com/users/${username}/repos`)
;

const getUserInfo = (username) =>
  axios.get(`https://api.github.com/users/${username}`)
;

const getGithubInfo = (username) =>
    axios.all([getRepos(username), getUserInfo(username)])
      .then(axios.spread((repos, userInfo) => ({
        repos: repos.data,
        bio: userInfo.data
      })))
;

export default getGithubInfo;
