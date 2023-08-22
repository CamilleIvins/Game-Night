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
    <div class="card col-md-7 col-12">
    <div class="card-body">
            ${this.name}'s score is: ${this.score}
        </div>
        <button class="col-5" onclick="app.PlayersController.scorePoint('${this.name}')">
        +1
        </button>
    </div>

    `
    }
    get addPlayer() {
        this.name = form.value.name
        this.score = 0
    }


    //     get addPlayer() {
    //         return `
    //     <form onsubmit="app.playersController.addPlayer()">
    //   <div>
    //     <label for="name">Player Name:</label>
    //     <input type="text" minlength="2" maxlength="15" name="name" required />
    //   </div>
    //   <div>
    //     <button type="submit">Add Player</button>
    //   </div>
    // </form>
    // `
    //     }
}


