function verifyArray(array, crescent = true) {
    for (let i = 1; i < array.length; i++)
        if ((crescent && array[i] < array[i-1]) || (!crescent && array[i] > array[i-1]))
            return false
    return true
}

module.exports = {verifyArray}