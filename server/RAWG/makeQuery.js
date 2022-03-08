const makeGenresQuery = (genres) => {
    if (!genres)
        return "";

    let queryString = "";
    if (Array.isArray(genres)) {
        genres.map((genre, index) => {
            queryString += `&genres=${genre}`
        })
    } else queryString = `&genres=${genres}`

    return queryString;
}
const makePageQuery = (page) => {
    return (!page || page < 1) ? `&page=1` : `&page=${page}`
}
const parseId = (url) => {
    return url.substring(url.lastIndexOf('/') + 1);
}

module.exports = {
    makeGenresQuery,
    makePageQuery,
    parseId
}