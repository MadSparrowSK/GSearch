module.exports = parseEntryObject = (body) => {
    return {
        author: body.author,
        title: body.title,
        sub_title: body.sub_title,
        description: body.description,
        content: body.content,
        type: body.type,
        isHotPost: body.isHotPost
    };
}