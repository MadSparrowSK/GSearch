module.exports = (body) => {
    if(Array.isArray(body.tag)) {
        return [...body.tag]
    }
    return [body.tag]
}