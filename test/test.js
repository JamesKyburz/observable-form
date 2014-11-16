var of = require('..');
var test = require('tape');
var simulate = require('simulate');
var domify = require('domify');

var html =
  '<form>'+
    '<input name="name" value="y">'+
    '<input name="paynow" type="checkbox" value="off">'+
    '<select name="cardtype">'+
      '<option>MASTERCARD<option>'+
      '<option>VISA<option>'+
      '<option>AMEX<option>'+
    '<select>'
  '</form>'
;
var form = domify(html);

test('toJSON returns field values as json', function(t) {
  var observe = of(form);
  t.plan(1);

  t.deepEqual(
    observe.toJSON(),
    {name: 'y', paynow: false, cardtype: 'MASTERCARD'}
  );
});

test('can monitor changes for a single input', function(t) {
  var observe = of(form);
  t.plan(1);

  observe.on('change', function(e) {
    t.deepEqual(e, {name: 'name', value: 'x'});
    observe.cleanup();
  });

  var input = form.querySelector('[name=name]');
  input.value = 'x';
  simulate.event(input, 'input');
});

test('test multiple changes', function(t) {
  var observe = of(form);
  var changes = [];
  var pending = 3;
  observe.on('change', function(e) {
    changes.push(e);
    pending--;
    verify();
  });
  function verify() {
    console.log(changes);
    if (!pending) {
      t.deepEqual(changes, [
        {name: 'name', value: 'name'},
        {name: 'paynow', value: true},
        {name: 'cardtype', value: 'AMEX'}
      ]);
      observe.cleanup();
      t.end();
    }
  }
  var input;
  input = form.querySelector('[name=name]');
  input.value = 'name';
  simulate.event(input, 'input');

  input = form.querySelector('[name=paynow]');
  input.checked = true;
  simulate.event(input, 'change');

  input = form.querySelector('[name=cardtype]');
  input.value = 'AMEX';
  simulate.event(input, 'change');
});

test('can change input value using obserable fields', function(t) {
  var observe = of(form);
  t.plan(2);

  observe.fields.name('y');

  var input = form.querySelector('[name=name]');
  t.equals(input.value, 'y');
  t.equals(observe.fields.name(), 'y');
  observe.cleanup();
});

test('can change select value using obserable fields', function(t) {
  var observe = of(form);
  t.plan(2);

  observe.fields.cardtype('AMEX');

  var input = form.querySelector('select');
  t.equals(input.value, 'AMEX');
  t.equals(observe.fields.cardtype(), 'AMEX');
  observe.cleanup();
});

test('can change checkbox value using obserable fields', function(t) {
  var observe = of(form);
  t.plan(2);

  observe.fields.paynow(true);

  var input = form.querySelector('[type=checkbox]');
  t.ok(input.checked);
  t.ok(observe.fields.paynow());
  observe.cleanup();
});
