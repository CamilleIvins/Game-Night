import { AppState } from "../AppState.js"

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
        let addPoint = parseInt(window.prompt('New score: '))
        console.log('+1', playerName, addPoint)
    }

}
