module.exports = (body) => {
    return {
        name: body.name,
        description: body.description,
        content: body.content,
        requirements: body.requirements
    }
}