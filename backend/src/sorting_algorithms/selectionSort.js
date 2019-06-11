/*
    Base code: https://www.geeksforgeeks.org/selection-sort/
*/

function sort (array) {
    let ordered_array = [...array]
    let size = ordered_array.length
    
    for (let i = 0; i < size - 1; i++) {
        let min_index = i
        for (let j = i+1; j < size; j++)
            if (ordered_array[j] < ordered_array[min_index])
                min_index = j
        
        let temp = ordered_array[min_index]
        ordered_array[min_index] = ordered_array[i]
        ordered_array[i] = temp
    }

    return ordered_array;
}

module.exports = {sort}