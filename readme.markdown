# observable-form

Observable form

[![build status](https://secure.travis-ci.org/JamesKyburz/observable-form.svg)](http://travis-ci.org/JamesKyburz/observable-form)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/observable-form.svg)](https://saucelabs.com/u/observable-form)

Try it out! [![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=6f736c7153ae7e246b9d)

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

## o.cleanup()

cleanup event listeners

# install

With [npm](https://npmjs.org) do:

```
npm install observable-form
```

# test

```
npm test -- --local
```

# license

MIT
