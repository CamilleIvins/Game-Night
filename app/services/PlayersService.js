import { AppState } from "../AppState.js";

class PlayersService {

    scorePoint(playerName, updatedScore) {
        debugger
        let player = AppState.players.find(player => player.name == playerName)
        console.log('service', playerName, updatedScore, player)
        player.score = updatedScore
        console.log(player);
    }

}

export const playersService = new PlayersService()