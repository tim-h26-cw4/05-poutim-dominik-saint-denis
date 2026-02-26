export default class Chef {
  constructor(element) {
    console.log('debut class chef');
    this.element = element;
    this.menu = [];
    this.container = '';
    this.init();
  }
  init() {
    const poutines = document.querySelectorAll('[data-component="Poutine"]');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      new Poutine(poutine);
    }
  }
}
