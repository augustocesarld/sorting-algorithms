function generateNumbers (size, min_value, max_value) {
    let array = []
    for (let i = 0; i < size; i++) {
        let number = min_value + Math.random() * max_value
        array.push(number.toFixed(2))
    }
    return array;
}

module.exports = {generateNumbers}