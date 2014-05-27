# observable-form

Observable form

[![browser support](https://ci.testling.com/jameskyburz/observable-form.png)](https://ci.testling.com/jameskyburz/observable-form)

[![build status](https://api.travis-ci.org/JamesKyburz/observable-form.svg)](https://api.travis-ci.org/JamesKyburz/observable-form.svg)

Try it out! [![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=x)

main.js:

``` js
var gauge = require('gauge-progress')();
gauge.start();
gauge.progress(10, 100); //10%

```

use with [browserify](http://browserify.org):

# methods

``` js
var of = require('observable-form')
```

## var o = of(form);

## o.on('change', cb) //callback is called with name and value of the change

##. o.cleanup() // cleanup event listeners

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
