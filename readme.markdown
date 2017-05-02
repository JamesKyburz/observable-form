# observable-form

Observable form

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![build status](https://secure.travis-ci.org/JamesKyburz/observable-form.svg)](http://travis-ci.org/JamesKyburz/observable-form)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/node-observable-form.svg)](https://saucelabs.com/u/node-observable-form)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/observable-form.svg)](https://greenkeeper.io/)

Try it out! [![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=68acff1a09de5809378d)

use with [browserify](http://browserify.org)

# methods

``` js
var of = require('observable-form')
```

## var o = of(form);

observe form

## o.on('change', cb)

callback is called with name and value of the change

## o.fields

fields is an object literal containing observable functions for each input

## o.toJSON

a json representation of fields

## o.cleanup()

cleanup event listeners

# install

With [npm](https://npmjs.org) do:

```
npm install observable-form
```

# test

```
npm test
```

# license

MIT
