module.exports = (body) => {
    return {
        author: body.author,
        title: body.title,
        description: body.description,
        content: body.content,
        image: body.image,
        type: body.type,
    }
}