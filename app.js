var express = require('express');
var app = express();
var mysql = require('mysql');

var routes = require('./routes/index');
var users = require('./routes/users');

app.use('/', routes);
app.use('/users', users);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'testuser',
    database: 'test_app'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

app.get('/users', function (req, res) {
    connection.query('select * from posts', function (err, result, fields) {
        // res.render('posts', { title: 'Express Users', users: result });
        // res.send('posts'+ rows.id);
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        res.send("Hello world" + result[0].name);
        console.log(result);
    });
});

// http://localhost:3000/api/1
app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
    connection.query('insert into posts(name,post,created) values(\'sato'+req.params.version+'\','+req.params.version+',\'2016-7-12 11:00:00\')');
    // connection.query('insert into posts(name,post,created) values(\'sato1\',\'hello1\',\'2016-7-12 11:00:00\')');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});