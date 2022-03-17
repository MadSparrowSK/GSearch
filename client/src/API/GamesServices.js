import axios from "axios";

export class GamesServices {
    static async GetAllGames() {
        const response = await axios.get('http://localhost:5000/games-api/games');
        return response;
    }
}