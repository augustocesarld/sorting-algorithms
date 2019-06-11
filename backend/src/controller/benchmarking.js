//Sorting Algorithms
const insertionSort = require('../sorting_algorithms/insertionSort')
const selectionSort = require('../sorting_algorithms/selectionSort')
const bubbleSort = require('../sorting_algorithms/bubbleSort')
const shellSort = require('../sorting_algorithms/shellSort')
const quickSort = require('../sorting_algorithms/quickSort')
const mergeSort = require('../sorting_algorithms/mergeSort')
const jsDefault = require('../sorting_algorithms/js-default')

const numbers = require('./numbers')
const limit = 10

function getTime (method, array) {
    let start = new Date().getTime()
    method.sort(array)
    let end = new Date().getTime()
    
    return end - start
}

function generateObject (name, method, arrays, numbers) {
    let times = []
    for (let i = 0; i < arrays.length; i++) {
        let time = getTime(method, arrays[i])
        times.push(time)
    }

    return {
        name,
        numbers,
        times
    }
}

async function getResults (min, max, size) {
    let arrays = []
    let nums = numbers.generateGapNumbers(size, limit)

    for (let i = 0; i < nums.length; i++) {
        let array = numbers.generateRandomNumbers(min, max, nums[i])
        arrays.push(array)
    }

    let results = []
    results.push(generateObject('Insertion Sort', insertionSort, arrays, nums))
    results.push(generateObject('Selection Sort', selectionSort, arrays, nums))
    results.push(generateObject('Bubble Sort', bubbleSort, arrays, nums))
    results.push(generateObject('Shell Sort', shellSort, arrays, nums))
    results.push(generateObject('Quick Sort', quickSort, arrays, nums))
    results.push(generateObject('Merge Sort', mergeSort, arrays, nums))

    return results
}

module.exports = {getResults}