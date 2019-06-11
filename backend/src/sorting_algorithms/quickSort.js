/*
    Base code: https://www.geeksforgeeks.org/quick-sort/
*/

function partition (array, low, high) {
    let pivot = array[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    let temp = array[i+1]
    array[i+1] = array[high]
    array[high] = temp

    return i + 1
}

function quickSort (array, low, high) {
    if (low < high) {
        let pi = partition(array, low, high)
        quickSort(array, low, pi-1)
        quickSort(array, pi+1, high)
    }
}

function sort (array) {
    let ordered_array = [...array]
    let size = ordered_array.length

    quickSort(ordered_array, 0, size - 1)

    return ordered_array
}

module.exports = {sort}