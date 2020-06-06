var express = require('express');
var randtoken = require('rand-token');
var app = express();

app.get('/login', function (req, res) {
    console.log("LOGIN requested");
    const token = randtoken.generate(16);
    console.log("token : "+token);
    res.json({token: token});
});

app.post('/sync', function (req, res) {
    console.log("SYNC requested");
    res.json({feedback: "ok"});
});

var server = app.listen(8008, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
