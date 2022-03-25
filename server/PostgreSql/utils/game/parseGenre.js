module.exports = (body) => {
    if(Array.isArray(body.genre)) {
        return [...body.genre]
    }

    return [body.genre];
}