promise-me
==========
This is really small implementation of promises/A+ written just to study promises a little bit more.

# Installation
You can either use npm

`$ npm install promiseme`

or just simply use the `promiseme.js` file.

# Usage
## Create a deferred
`var d = promiseme.deferred();`

## Fulfill a deferred
`d.fulfill(value)`

## Reject a deferred
`d.reject(reason)`

## Get a promise from a deferred
`d.promise`

## Use then
`d.then(onFulfilled, onRejected)`

# Docs
For more information about how promises works contact [Promises/A+](http://promises-aplus.github.io/promises-spec)

# Build status
[![Build Status](https://travis-ci.org/neojski/promise-me.png?branch=master)](https://travis-ci.org/neojski/promise-me)
