module.exports = makeSlug = (text) => {
    return text.toLowerCase().split(' ').join('-');
}