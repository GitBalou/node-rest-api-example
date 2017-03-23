var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes/index');
var scores = require('./routes/scores');
var sales = require('./routes/sales');

// démarrage d'express
var app = express();

/* App.use([path], callback, [callback])
Associe le middleware 'callback' à un path (par défaut : tous)
Lorsque la base du path demandé correspond à path, on déclenche le callback
*/

/* autorise les requêtes CORS = les ressources sur une page web peuvent venir d'un autre domaine que celui contenant la page
Modifie les entête HTTP : Access-Allow-Control-Origin = "*"
*/
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

// Log du serveur avec option 'dev'
app.use(logger('dev'));

// Parse les requêtes : application/json dans req.body
app.use(bodyParser.json());

// Parse les requêtes application/x-www-form-urlencoded req.body
app.use(bodyParser.urlencoded({ extended: false }));

// parse les cookies dans req.cookies
app.use(cookieParser());

// distribution des fichiers statics (css) pour toutes les routes
app.use(express.static(path.join(__dirname, 'public')));

// Front controller
// routes, scores & sales sont des middleware express.router
app.use('/', routes);
app.use('/sales', sales);
app.use('/scores', scores);

// Si j'arrive ici : 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err); // déclenche les middleware d'erreurs avec param err
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ status: err.status });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ status: err.status });
});

module.exports = app;
