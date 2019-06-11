/*
    Base code: https://www.geeksforgeeks.org/bubble-sort/
*/

function sort (array) {
    let ordered_array = [...array]
    let size = ordered_array.length
    
    for (let i = 0; i < size - 1; i++)
        for (let j = 0; j < size-i-1; j++)
            
            if (ordered_array[j] > ordered_array[j + 1]) {
                let temp = ordered_array[j]
                ordered_array[j] = ordered_array[j+1]
                ordered_array[j+1] = temp
            }

    return ordered_array;
}

module.exports = {sort}