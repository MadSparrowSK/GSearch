const ErrorController = require('../../Error/ErrorController')
const GetController = require('../MicroController/GetController')
const CheckController = require('../MicroController/CheckController')
const LinkController = require('../MicroController/LinkController')

const GameServiceCRUD = require('../MainService/GameServiceCRUD')
const LinkService = require('../MicroService/LinkService')


const parseGame = require('../utils/game/parseGame');
const parseGenre = require('../utils/game/parseGenre');
const parseLabel = require('../utils/game/parseLabel');
const parseTag = require('../utils/game/parseTag');
const parsePlatform = require('../utils/game/parsePlatform');
const parsePublisher = require('../utils/game/parsePublisher');
const parseDeveloper = require('../utils/game/parseDeveloper');

class GameController {
    async getAllGames(req, res) {
        try {
            const {_limit, _page} = req.query;
            if(_limit && _page) {
                const min = _limit * _page - _limit;
                const max = _limit * _page;

                const req_db = await GameServiceCRUD.getAllWithLimit(min, max)
                const games = req_db.rows;
                res.status(200).json({
                    games
                })
            } else {
                const req_db = await GameServiceCRUD.getAll();
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

                const req_db = await GameServiceCRUD.getAllByGenreWithLimit(min,max,genre);
                const games = req_db.rows;
                res.status(200).json({
                    games
                })
            } else {
                const req_db = await GameServiceCRUD.getAllByGenre(genre);
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
            const req_db = await GameServiceCRUD.getById(id);
            const game = req_db.rows[0];
            res.status(200).json(game);
        } catch (e) {
            console.log(e.message)
            ErrorController._500(req,res)
        }
    }

    async createGame(req, res) {
        try {
            const game = parseGame(req.body);
            const platform = parsePlatform(req.body);
            const genre = parseGenre(req.body);
            const tag = parseTag(req.body);
            const label = parseLabel(req.body);
            const developer = parseDeveloper(req.body);
            const publisher = parsePublisher(req.body);

            const isExist = await CheckController.isGameExist(game);
            if(isExist) {
                res.status(500).json({
                    message: "This game already exist"
                })
            } else {
                const req_game = await GameServiceCRUD.create(game);
                const res_game = req_game.rows[0];

                res_game.platforms = await LinkController.platform(res_game.id, platform);
                res_game.genres = await LinkController.genre(res_game.id, genre)
                res_game.tags = await LinkController.tag(res_game.id, tag);
                res_game.labels = await LinkController.label(res_game.id, label);
                res_game.developers = await LinkController.developer(res_game.id, developer);
                res_game.publishers = await LinkController.publisher(res_game.id, publisher);

                res.status(201).json({
                    message: "Game was added",
                    game: res_game
                })
            }
        } catch (e) {
            console.log(e)
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