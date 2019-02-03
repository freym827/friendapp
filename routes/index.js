const connection = require('../config/connection')

module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        connection.query('SELECT * FROM friends', (err, data) => {
            err?res.send(err):res.json({locations: data})
        })
    })
}