const consoleRead = require('./console-read')
const params = consoleRead.readParams()

const numbers = require('./numbers')
const array = numbers.generateNumbers(params.size, params.min_value, params.max_value)

const benchmarking = require('./benchmarking')
const results = benchmarking.getResults(array)

//Output
console.log()
console.log('Original array:', results[0].original_array.join(', '))
console.log('Ordered array:', results[0].ordered_array.join(', '))
console.log()
console.log('RESULTS:')
results.forEach(result => console.log(result.toString()))

process.exit();