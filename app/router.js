import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  //   {
  //     path: '',
  //     controller: HomeController,
  //     view: /*html*/`
  //     <form onsubmit="app.playersController.addPlayer()">
  //   <div>
  //     <label for="name">Player Name:</label>
  //     <input type="text" minlength="2" maxlength="15" name="name" required />
  //   </div>
  //   <div>
  //     <button type="submit">Add Player</button>
  //   </div>
  // </form>
  //     `},
  {
    path: '',
    controller: PlayersController,
    view: /*html*/`
    <form onsubmit="app.playersController.addPlayer()">
    <div>
      <label for="name">Player Name:</label>
      <input type="text" minlength="2" maxlength="15" name="name" required />
    </div>
    <div>
      <button class="btn" type="submit">Add Player</button>
    </div>
  </form>

  <div>We have our players</div>
  <section class="row" id="players">
  </section>
</main>`
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]