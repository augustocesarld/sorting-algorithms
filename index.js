const consoleRead = require('./console-read')
const numbers = require('./numbers')
const verifier = require('./verifier')
const algorithmsController = require('./algorithms')

let params = consoleRead.readParams()
let array = numbers.generateNumbers(params.size, params.min_value, params.max_value)
let algorithms = algorithmsController.getAlgorithms()

console.log('Original array:', array.join(', '))
console.log('Results')

for (let i = 0; i < algorithms.length; i++) {
    let start = new Date().getTime()
    let ordered = algorithms[i].object.sort(array)
    let end = new Date().getTime()

    algorithms[i].time = end - start
    algorithms[i].verified = verifier.verifyArray(ordered)
    console.log(algorithms[i].toString())
}

process.exit();