import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}
new Main();
// La ligne suivante devrait être au TOUT début du init() du Main
