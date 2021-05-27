'use strict'

const fs = require('fs')
const path = require('path')
const { it } = require('mocha')
const { expect } = require('chai')
const { describe } = require('mocha')

let test = process.argv[process.argv.length - 1]
const runSingleTest = test.indexOf('--') !== -1
test = test.replace('--', '')
test += '.test.js'


const api = require('../../dist/index.js')
const TEST_DIRECTORIES = ['helpers', 'searches', 'sorts', 'structures']

Object.entries(
    TEST_DIRECTORIES.reduce(
      (accumulated, directory) => ({
        ...accumulated,
        [directory]: [...fs.readdirSync(path.join(__dirname, directory))]
      }),
    {})
).forEach(([directory, tests]) => {
  tests.forEach(file => {
      describe(file.replace('.test.js', '()'), () => {

      require(path.join(__dirname, directory, file))(it, expect, api);
    })
  })
});
