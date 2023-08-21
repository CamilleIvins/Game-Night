export class Players {

    name
    score


    constructor(newName, newScore) {
        console.log('testing, testing')

        this.name = newName;

        this.score = newScore;
    }

    get PlayerTemplateCard() {
        return `
    <div class="card">
    <div class="card-body">
            ${this.name}'s score is: ${this.score}
        </div>
        <button onclick="app.PlayersController.scorePoint()">
        +1
        </button>
    </div>

    `
    }


}


