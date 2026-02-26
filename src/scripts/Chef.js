import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    console.log('debut class chef');
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const instance = poutines[i];
      new Poutine(instance);
      this.menu.push(instance);
    }
    console.log(this.menu);
    const submit = this.element.querySelectorAll('.js-submit');
    for (let i = 0; i < submit.length; i++) {
      const element = submit[i];
      element.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    console.log('submit');
  }
}
