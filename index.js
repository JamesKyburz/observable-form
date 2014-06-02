var o = require('observable');
var em = require('events').EventEmitter;

module.exports = ObservableForm;

ObservableForm.prototype = Object.create(em.prototype);

function ObservableForm(form) {
  if (!(this instanceof ObservableForm)) return new ObservableForm(form);
  em.call(this);

  this.form = form;
  this.fields = {};
  this.listeners = [];
  this._observe();
}

ObservableForm.prototype._observe = function observe() {
  this.cleanup();
  var self = this;
  [].forEach.call(this.form.querySelectorAll('input:not([type=radio]), select, textarea'), observeInput);

  function observeInput(input) {
    var name = input.getAttribute('name');
    if (!name || input.disabled) return;
    self.fields[name] = getObservable(input);
    self.listeners.push(self.fields[name](change));

    function change(value) {
      self.emit('change', {name: name, value: value});
    }
  }
};

function getObservable(input) {
  if (input.nodeName === 'SELECT') {
    return o.select(input);
  } else if (input.type === 'checkbox') {
    return o.input(input, 'checked', 'change');
  } else {
    return o.input(input);
  }
}

ObservableForm.prototype.cleanup = function cleanup() {
  this.listeners.forEach(stop);
  this.listeners = [];

  function stop(f) {
    f();
  }
};
