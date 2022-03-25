module.exports = (body) => {
    if(Array.isArray(body.publisher)) {
        return [...body.publisher]
    }
    return [body.publisher]
}