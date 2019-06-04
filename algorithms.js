//Sorting Algorithms
const selectionSort = require('./sorting_algorithms/selectionSort')
const insertionSort = require('./sorting_algorithms/insertionSort')
const bubbleSort = require('./sorting_algorithms/bubbleSort')
const shellSort = require('./sorting_algorithms/shellSort')
const quickSort = require('./sorting_algorithms/quickSort')
const mergeSort = require('./sorting_algorithms/mergeSort')

function generateObject (name, object) {
    return {
        name,
        object, 
        time: 0,
        verified: false,

        toString: function () {
            return `${this.name}'s time: ${this.time}ms (${this.verified? 'Verified' : 'Has Some Errors'})`
        }
    }
}

function getAlgorithms () {
    let algorithms = []

    algorithms.push(generateObject('Insertion Sort', insertionSort))
    algorithms.push(generateObject('Selection Sort', selectionSort))
    algorithms.push(generateObject('Bubble Sort', bubbleSort))
    algorithms.push(generateObject('Shell Sort', shellSort))
    algorithms.push(generateObject('Quick Sort', quickSort))
    algorithms.push(generateObject('Merge Sort', mergeSort))

    return algorithms
}


module.exports = {getAlgorithms}