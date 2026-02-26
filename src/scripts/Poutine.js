export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.js-type');
    this.selectedType = '';
    this.init();
    console.log('instance de poutine');
  }
  init() {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      type.addEventListener('click', this.selectedType.bind(this));
    }
  }
}
