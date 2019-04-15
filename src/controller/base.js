module.exports = class extends think.Controller {
  __before() {
    this.assign({title: 'asdasa'});
  }
};
