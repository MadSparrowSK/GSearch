module.exports = parseGame = (game) => {
    const parsedGame = {};
    parsedGame['id'] = game['id'];
    parsedGame['name'] = game['name_original'];
    parsedGame['description'] = game['description'];
    parsedGame['metacritic'] = game['metacritic'] || 0;
    parsedGame['released'] = game['released'];
    parsedGame['background_image'] = game['background_image'];
    parsedGame['platform'] = game['platform'];
    parsedGame['stored'] = game['stored'];
    parsedGame['developers'] = game['developers'];
    parsedGame['genres'] = game['genres'];
    parsedGame['tags'] = game['tags'];
    parsedGame['publishers'] = game['publishers'];
    parsedGame['erb_rating'] = game['erb_rating']
    parsedGame['description_raw'] = game['description_raw']

    return parsedGame;
}