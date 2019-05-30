/*
    Base code: https://www.geeksforgeeks.org/insertion-sort/
*/

function sort (array, crescent = true) {
    let ordered_array = [...array]
    let size = ordered_array.length
    
    for (let i = 1; i < size; i++) {
        let key = ordered_array[i]
        let j = i - 1

        while (j >= 0 && ordered_array[j] > key) {
            ordered_array[j+1] = ordered_array[j]
            j--;
        }
        ordered_array[j+1] = key
    }

    return ordered_array;
}

module.exports = {sort}