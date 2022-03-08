const {fetchGameById, fetchAllGames} = require('./fetchGames')
const {makeGenresQuery, makePageQuery, parseId} = require('./makeQuery')
const parseGame = require('./praseGame')

class RAWGController {
    constructor() {
        this.url = "https://api.rawg.io/api/games";
        this.token = "433319b1d5c94eabb9fe5446c01c44a8";
        this.key = `key=${this.token}`
    }

    async getAllGames(req,res) {
        const genreQuery = makeGenresQuery(req.query.genres)
        const pageQuery = makePageQuery(req.query.page);
        const response = await fetchAllGames(this.url, this.key, genreQuery, pageQuery);
        const list = {
            data: response.data.results
        }
        res.status(200).json(list);
    }
    async getGameById(req, res) {
        const {id} = req.params;
        const gameResponse = await fetchGameById(this.url,this.key, id);
        const game = parseGame(gameResponse.data);
        res.status(200).json(game)
    }
}

module.exports = new RAWGController()