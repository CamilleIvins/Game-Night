import { AppState } from "../AppState.js"
import { Players } from "../models/Players.js";
import { playersService } from "../services/PlayersService.js";


export class PlayersController {
    constructor() {
        console.log(AppState.players, 'Hello, is this working, now?');
        this.drawPlayers()

    }

    drawPlayers() {
        let content = ``
        AppState.players.forEach(player => {
            content += player.PlayerTemplateCard
        })
        document.getElementById('players').innerHTML = content
    }


    scorePoint(playerName) {
        let updatedScore = parseInt(window.prompt('New score: '))
        console.log('+1', playerName, updatedScore)
        playersService.scorePoint(playerName, updatedScore)
        this.drawPlayers()
    }

    // addPlayer(newPlayer) {
    //     newPlayer.preventDefault()
    //     console.log('Working?');
    //     let form = newPlayer.target

    //     let newPlayer = form.name.value
    //     score = 0
    //     playersService.addPlayer(newPlayer, score)

    //     this.drawPlayers()
    //     form.reset()

    // }

}
