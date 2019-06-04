//Sorting Algorithms
const insertionSort = require('./sorting_algorithms/insertionSort')
const selectionSort = require('./sorting_algorithms/selectionSort')
const bubbleSort = require('./sorting_algorithms/bubbleSort')
const shellSort = require('./sorting_algorithms/shellSort')
const quickSort = require('./sorting_algorithms/quickSort')
const mergeSort = require('./sorting_algorithms/mergeSort')
const jsDefault = require('./sorting_algorithms/js-default')

function verifyArray(array) {
    for (let i = 1; i < array.length; i++)
        if (array[i] < array[i-1] || array[i] === undefined)
            return false
    return true
}

function generateObject (name, algorithm, original_array) {
    return {
        name,
        algorithm, 
        original_array,
        ordered_array: [],
        time: 0,
        verified: false,

        sort: function() {
            let start = new Date().getTime()
            this.ordered_array = this.algorithm.sort(this.original_array)
            let end = new Date().getTime()

            this.time = end - start
            this.verified = verifyArray(this.ordered_array)
        },

        toString: function () {
            return `${this.name}'s time: ${this.time}ms (${this.verified? 'Verified' : 'Has Some Errors'})`
        }
    }
}

function getResults (array) {
    let results = []
    
    results.push(generateObject('Insertion Sort', insertionSort, array))
    results.push(generateObject('Selection Sort', selectionSort, array))
    results.push(generateObject('Bubble Sort', bubbleSort, array))
    results.push(generateObject('Shell Sort', shellSort, array))
    results.push(generateObject('Quick Sort', quickSort, array))
    results.push(generateObject('Merge Sort', mergeSort, array))
    results.push(generateObject('JS Default Method', jsDefault, array))

    results.forEach(element => element.sort())
    return results
}

module.exports = {getResults}