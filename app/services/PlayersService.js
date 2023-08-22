import { AppState } from "../AppState.js";

// only modify data at this (service) layer

class PlayersService {

    scorePoint(playerName, updatedScore) {

        let player = AppState.players.find(player => player.name == playerName)
        console.log('service', playerName, updatedScore, player)
        player.score = updatedScore
        console.log(player);
    }

    // check Tuesday Aug 18th lecture for help?

    addPlayer(playerName) {
        playersService.selectPlayer(playerName)
        selectPlayer = AppState.players.find(player => player.name == playerName)
        // AppState.players.push(newPlayer)
        newPlayer.score = 0
        console.log("maybe this is the problem?");
    }

}

export const playersService = new PlayersService()