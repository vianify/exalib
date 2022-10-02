__path = process.cwd();
var favicon = require('serve-favicon');
var express = require('express'),
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var app = express()

app.use(favicon(__path +'/public/favicon.ico'))
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
