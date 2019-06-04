const readLine = require('readline-sync')

const params = {
    size : 10,
    min_value : 0,
    max_value : 100
}

function readParams () {
    params.size = parseInt(readLine.question('> Type how many numbers: '))
    params.min_value = parseFloat(readLine.question('> Type the minimun value: '))
    params.max_value = parseFloat(readLine.question('> Type the maximum value: '))
    return params
}

module.exports = {readParams}