const [fs, path, {expect}, {it, describe}] = [
  require('fs'), 
  require('path'), 
  require('chai'), 
  require('mocha')
]

require('../dist/index.js')
let api = global.api
let test = process.argv[process.argv.length - 1]

const options = {
  payload: { api },
  singleTest: test.indexOf('--') !== -1,
  test: `${test.replace('--', '')}.test.js`,
  directories: ['helpers', 'searches', 'sorts', 'structures']
}

Object.entries(
    options.directories.reduce(
      (accumulated, directory) => ({
        ...accumulated,
        [directory]: [...fs.readdirSync(path.join(__dirname, directory))]
      }),
    {})
).forEach(([directory, tests]) => {
  tests.forEach(file => {
      describe(file.replace('.test.js', '()'), () => {
        require(path.join(__dirname, directory, file))(it, expect, options.payload)
      })
  })
})
