const axios = require('axios')

const fetchAllGames = async (url, key, genres = "", page = "") => {
    const response = await axios.get(`${url}?${key}${genres}${page}`)
    return response;
}
const fetchGameById = async (url, key, id) => {
    const response = await axios.get(`${url}/${id}?${key}`);
    return response;
}

module.exports = {
    fetchAllGames,
    fetchGameById
}