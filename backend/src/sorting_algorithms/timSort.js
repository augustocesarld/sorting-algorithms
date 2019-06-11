/*
    Base code: https://www.geeksforgeeks.org/timsort/
*/

const RUN = 32
const insertionSort = require('./insertionSort')

function merge (array, left, middle, right) {
    let length1 = middle - left + 1, length2 = right - middle
    let leftArray = [], rightArray = []

    for (let x = 0; x < length1; x++) 
        leftArray[x] = array[left+x]
    for (let x = 0; x < length2; x++)
        rightArray[x] = array[middle+1+x]

    let [i,j,k] = [0,0,left]

    while (i < length1 && j < length2)
        if (leftArray[i] < rightArray[j])
            array[k++] = leftArray[i++]
        else
            array[k++] = rightArray[j++]

    while (i < length1)
        array[k++] = leftArray[i++]
    while (j < length2)
        array[k++] = rightArray[j++]
}

function timSort (array) {
    for (let i = 0; i < array.length; i += RUN) {
        let size = Math.min(i+RUN-1, array.length-1) + 1
        let newArray = insertionSort.sort(array.slice(i, size))
        let indexJ = 0
        for (let j = i; j < size; j++)
            array[j] = newArray[indexJ++]
    }

    for (let size = RUN; size < array.length; size *= 2)
        for (let left = 0; left < array.length; left += 2 * size) {
            let middle = left + size - 1
            let right = Math.min((left + 2 * size - 1), (array.length - 1))
            merge(array, left, middle, right)
        }
}

function sort (array) {
    let ordered_array = [...array]
    
    timSort(ordered_array)
    
    return ordered_array;
}

module.exports = {sort}