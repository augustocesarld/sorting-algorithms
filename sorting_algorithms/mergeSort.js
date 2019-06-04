/*
    Base code: https://www.geeksforgeeks.org/merge-sort/
*/

function merge (array, start, middle, end) {
    let indexA = start, indexB = middle + 1
    let size = end - start + 1
    let aux = []

    for (let i = 0; i < size; i++) {
        if ((indexA <= middle) && (indexB <= end))
            if (array[indexA] <= array[indexB])
                aux[i] = array[indexA++]
            else
                aux[i] = array[indexB++]
        else if (indexA > middle)
            aux[i] = array[indexB++]
        else
            aux[i] = array[indexA++]
    }

    for (let i = 0; i < size; i++)
        array[start + i] = aux[i]
}

function mergeSort (array, start, end) {
    if (start < end) {
        let middle = (start + end) / 2
        mergeSort(array, start, middle)
        mergeSort(array, middle+1, end)
        merge(array, start, middle, end)
    }
}

function sort (array) {
    let ordered_array = [...array]
    let size = ordered_array.length

    mergeSort(ordered_array, 0, size-1)

    return ordered_array
}

module.exports = {sort}