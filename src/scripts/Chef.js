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
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
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
    if (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

    const p = document.createElement('p');

    let nbActive = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      console.log(poutine);
      if (poutine.isActive == true) {
        nbActive += 1;
      }
    }
    p.innerText = `Nombre total de poutine(s) : ${nbActive}`;
    this.container.appendChild(p);
  }
}
