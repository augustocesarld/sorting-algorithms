const express = require('express')
const benchmarking = require('./controller/benchmarking')

const routes = new express.Router()

routes.get('/results', (req, res) => {
    let min = parseInt(req.query.min)
    let max = parseInt(req.query.max)
    let size = parseInt(req.query.size)

    benchmarking.getResults(min, max, size).then(results => {
        return res.json(results)
    })
})

module.exports = routes