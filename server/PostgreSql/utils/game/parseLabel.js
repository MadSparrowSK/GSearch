module.exports = (body) => {
    if(Array.isArray(body.label)) {
        return [...body.label]
    }
    return [body.label]
}