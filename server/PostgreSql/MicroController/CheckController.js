const CheckService = require('../MicroService/CheckService')

class CheckController {
   async isGameExist(game) {
       const req_game = await CheckService.game(game);
       const res_game = req_game.rows[0];
       return res_game ? true : false;
   }
}

module.exports = new CheckController();