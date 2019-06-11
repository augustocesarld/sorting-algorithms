function generateRandomNumbers (min_value, max_value, size) {
    let array = []

    for (let i = 0; i < size; i++) {
        let number = min_value + Math.random() * (max_value - min_value)
        array.push(number.toFixed(2))
    }
    
    return array;
}

function generateGapNumbers (size, limit) {
    let gap = size <= limit? 1: parseInt(size / limit)
    let numbers = [1], index = 1

    for (let i = 1; i <= size; i+=gap) {
        numbers[index] = parseInt(size / limit * index)
        index++
    }
    
    return numbers.filter((number, index) => {
        return numbers.indexOf(number) == index
    })
}

module.exports = {generateRandomNumbers, generateGapNumbers}