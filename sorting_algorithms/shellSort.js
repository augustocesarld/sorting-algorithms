/*
    Base code: https://www.geeksforgeeks.org/shell-sort/
*/

function sort (array) {
    let ordered_array = [...array]
    let size = ordered_array.length

    let gaps = [1]
    for (let k = 1; gaps[k - 1] < size; k++)
        gaps[k] = Math.pow(2, k+1) + 1
    let pos_gap = gaps.length - 1
    let gap = gaps[pos_gap]
    

    while (pos_gap >= 0) {
        for (let i = gap; i < size; i++) {
            let value = ordered_array[i]
            let j = i
            while ((j >= gap) && (value < ordered_array[j - gap])) {
                ordered_array[j] = ordered_array[j-gap]
                j -= gap
            }
            ordered_array[j] = value
        }

        pos_gap--
        gap = gaps[pos_gap]
    }

    return ordered_array
}

module.exports = {sort}