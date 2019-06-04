const readLine = require('readline-sync')

function readParams () {
    let size = parseInt(readLine.question('> Type how many numbers: '))
    let min_value = parseFloat(readLine.question('> Type the minimun value: '))
    let max_value = parseFloat(readLine.question('> Type the maximum value: '))
    
    return {
        size,
        min_value,
        max_value
    }
}

module.exports = {readParams}