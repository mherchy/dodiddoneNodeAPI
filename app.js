var express = require('express');
var app = express();

app.get('/login', function (req, res) {
    res.end( JSON.stringify({token:"0123456789"}) );
});

app.post('/sync', function (req, res) {
    res.end( JSON.stringify({feedback:"ok"}) );
});

var server = app.listen(8008, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
