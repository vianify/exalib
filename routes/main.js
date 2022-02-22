__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/support', (req, res) => {
    res.sendFile(__path + '/views/support.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
