module.exports = (body) => {
    if(Array.isArray(body.platform)) {
        return [...body.platform]
    }

    return [body.platform]
}