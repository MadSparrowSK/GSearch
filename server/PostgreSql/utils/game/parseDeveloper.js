module.exports = (body) => {
    if(Array.isArray(body.developer)) {
        return [...body.developer];
    }
    return [body.developer]
}