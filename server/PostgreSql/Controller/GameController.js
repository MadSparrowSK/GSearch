const ErrorController = require('../../Error/ErrorController')
const GameService = require('../Service/GameService')

class GameController {
    async getAllGames(req, res) {
        try {
            const {_limit, _page} = req.query;
            if(_limit && _page) {
                const min = _limit * _page - _limit;
                const max = _limit * _page;

                const req_db = await GameService.getAllWithLimit(min, max)
                const games = req_db.rows;
                res.status(200).json({
                    games
                })
            } else {
                const req_db = await GameService.getAll();
                const games = req_db.rows[0];
                res.status(500).json({
                    message: "You choose your destiny",
                    games
                })
            }
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }
    async getGamesByGenre(req,res) {
        try {
            const {_limit, _page} = req.query;
            const {genre} = req.params;
            if(_limit && _page) {
                const min = _limit * _page - _limit;
                const max = _limit * _page;

                const req_db = await GameService.getAllByGenreWithLimit(min,max,genre);
                const games = req_db.rows;
                res.status(200).json({
                    games
                })
            } else {
                const req_db = await GameService.getAllByGenre(genre);
                const games = req_db.rows[0];
                res.status(500).json({
                    message: "You choose your destiny",
                    games
                })
            }
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }
    async getGameById(req, res) {
        try {
            const {id} = req.params;
            const req_db = await GameService.getById(id);
            const game = req_db.rows[0];
            res.status(200).json(game);
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async createGame(req, res) {
        try {
            res.status(200).json({
                message: "ok"
            })
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async updateGameById(req, res) {
        try {
            res.status(200).json({
                message: "ok"
            })
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async deleteGameById(req, res) {
        try {
            res.status(200).json("ok")
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }
    async _deleteAllGames(req,res) {
        try {
            res.status(200).json("ok")
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }
}

module.exports = new GameController()