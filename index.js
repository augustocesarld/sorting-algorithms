const consoleRead = require('./console-read')
const numbers = require('./numbers')
const verifier = require('./verifier')
const controller = require('./algorithms')

let params = consoleRead.readParams()
let array = numbers.generateNumbers(params.size, params.min_value, params.max_value)
let algorithms = controller.getAlgorithms()

console.log('Original array:', array.join(', '))
console.log('Results')

for (let i = 0; i < algorithms.length; i++) {
    let start, end, ordered

    start = new Date().getTime()
    ordered = algorithms[i].object.sort(array)
    end = new Date().getTime()

    algorithms[i].time = end - start
    algorithms[i].verified = verifier.verifyArray(ordered)
    console.log(algorithms[i].toString())
}

process.exit();