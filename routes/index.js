const connection = require('../config/connection')
module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        connection.query('SELECT * FROM friends', (err, data) => {
            err?res.send(err):res.json({locations: data})
        })
    })

    app.post('/api/friends', (req, res) => {
        connection.query("INSERT INTO friends (name, photo, score_1, score_2, score_3, score_4, score_5, score_6, score_7, score_8, score_9, score_10) " + 
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
         [req.body.name, req.body.photo, req.body.s1, req.body.s2, req.body.s3, req.body.s4, req.body.s5, req.body.s6, req.body.s7, req.body.s8, req.body.s9, req.body.s10], 
         (err, data) => {
            if(err) {
                console.log(err)
            }else {
                console.log(data)
            }
        });
    });
}