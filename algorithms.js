//Sorting Algorithms
const selectionSort = require('./sorting_algorithms/selectionSort')
const insertionSort = require('./sorting_algorithms/insertionSort')
const bubbleSort = require('./sorting_algorithms/bubbleSort')
const quickSort = require('./sorting_algorithms/quickSort')

function generateObject (name, object) {
    return {
        name,
        object, 
        time: 0,
        verified: false,

        toString: function () {
            return `${this.name}'s time: ${this.time}ms (${this.verified? 'Verificado' : 'Possui Erros'})`
        }
    }
}

function getAlgorithms () {
    let algorithms = []

    algorithms.push(generateObject('Insertion Sort', insertionSort))
    algorithms.push(generateObject('Selection Sort', selectionSort))
    algorithms.push(generateObject('Bubble Sort', bubbleSort))
    algorithms.push(generateObject('Quick Sort', quickSort))

    return algorithms
}


module.exports = {getAlgorithms}