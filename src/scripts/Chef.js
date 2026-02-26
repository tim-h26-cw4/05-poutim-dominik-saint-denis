import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    console.log('debut class chef');
    this.element = element;
    this.menu = [];
    this.container = '';
    this.init();
  }
  init() {
    const poutines = document.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const instance = poutines[i];
      new Poutine(instance);
      this.menu.push(instance);
    }
    console.log(this.menu);
  }
}
